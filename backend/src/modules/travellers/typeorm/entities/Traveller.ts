import TravelsTravellers from "@modules/travels/typeorm/entities/TravelsTravellers";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('travellers')
export default class Traveller {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('timestamp')
  birth: Date;

  @OneToMany(
    () => TravelsTravellers, 
    travel_traveller => travel_traveller.traveller, {
      cascade: true
    }
  )
  travel_traveller: TravelsTravellers[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}