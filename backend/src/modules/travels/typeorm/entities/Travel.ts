import Airplane from '../../../airplanes/typeorm/entities/Airplane';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TravelsTravellers from "./TravelsTravellers";

@Entity('travels')
export default class Travel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Airplane)
  @JoinColumn({ name: 'airplane_id' })
  airplane: Airplane

  @OneToMany(
    () => TravelsTravellers, 
    travel_travellers => travel_travellers.travel, {
      cascade: true,
    }
  )
  travel_travellers: TravelsTravellers[];

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}