import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import User from './User';

@Entity()
export default class LeagueInfo {
  @PrimaryGeneratedColumn()
  id = undefined;

  @OneToOne((type) => User, (user) => user.leagueInfo, { nullable: false, onDelete: 'CASCADE' })
  user = undefined;

  @Column({ type: 'varchar', length: 30, nullable: false })
  nick = undefined;
}
