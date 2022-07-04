import Travel from '../../../travels/typeorm/entities/Travel';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('airplanes')
export default class Airplane {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  place: string;

  @Column()
  model: string;

  @Column()
  airline: string;

  @Column('int')
  baggage_limit: number;

  @Column('int')
  seat_limit: number;

  @OneToMany(() => Travel, travel => travel.airplane, {
    cascade: true
  })
  travels: Travel[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}