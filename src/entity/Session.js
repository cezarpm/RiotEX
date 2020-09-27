import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

import { generateRandomHash } from '../_common/general';
import User from './User';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column('varchar', { length: 255 })
  token = undefined;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  creationDate = undefined;

  @ManyToOne((type) => User, { eager: true, onDelete: 'CASCADE' })
  user = undefined;

  async generateToken() {
    this.token = await generateRandomHash(this.id);
    return this.token;
  }
}
