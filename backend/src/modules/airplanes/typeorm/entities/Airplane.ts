import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @Column()
  baggage_limit: number;

  @Column()
  seat_limit: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}