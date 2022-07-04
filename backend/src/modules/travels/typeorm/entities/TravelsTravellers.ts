import Travel from "./Travel";
import Traveller from '../../../travellers/typeorm/entities/Traveller';
import TypeTraveller from '../../../types_travellers/typeorm/entities/TypeTraveller';
import { 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

@Entity('travels_travellers')
export default class TravelsTravellers {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Travel)
  @JoinColumn({ name: 'travel_id' })
  travel: Travel;

  @ManyToOne(() => Traveller)
  @JoinColumn({ name: 'traveller_id' })
  traveller: Traveller;

  @ManyToOne(() => TypeTraveller)
  @JoinColumn({ name: 'type_traveller_id' })
  type_traveller: TypeTraveller;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}