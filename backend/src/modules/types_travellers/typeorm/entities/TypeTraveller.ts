// import TravelsTravellers from "@modules/travels/typeorm/entities/TravelsTravellers";
import TravelsTravellers from '../../../travels/typeorm/entities/TravelsTravellers';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('types_travellers')
export default class TypeTraveller {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('bool')
  is_crew_member: boolean;

  @OneToMany(() => TravelsTravellers, travel_travellers => travel_travellers.type_traveller)
  travel_travellers: TravelsTravellers[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}