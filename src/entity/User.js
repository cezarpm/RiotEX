import bcrypt from 'bcrypt';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import LeagueInfo from './LeagueInfo';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column({ type: 'enum', enum: ['ACTIVE', 'DELETED'], nullable: false, default: 'ACTIVE' })
  status = 'ACTIVE';

  @Column({ type: 'varchar', length: 255, nullable: false })
  email = undefined;

  @Column({ type: 'varchar', length: 255, nullable: false })
  passwordHash = undefined;

  @OneToOne((type) => LeagueInfo, (leagueInfo) => leagueInfo.user, { nullable: true })
  leagueInfo = undefined;

  password; // only used on creation or update

  async checkPassword(password) {
    if (await bcrypt.compare(password, this.passwordHash)) {
      return true;
    }

    throw Error('ERR_INCORRECT_EMAIL_OR_PASSWORD');
  }
}
