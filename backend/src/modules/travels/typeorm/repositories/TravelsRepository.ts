import Airplane from "@modules/airplanes/typeorm/entities/Airplane";
import TypeTraveller from "@modules/types_travellers/typeorm/entities/TypeTraveller";
import { EntityRepository, Repository } from "typeorm";
import Travel from "../entities/Travel";

interface ITravellers {
  traveller_id: string,
  type_traveller: TypeTraveller,
}

interface IRequest {
  airplane: Airplane,
  date: Date
}

@EntityRepository(Travel)
export default class TravelRepository extends Repository<Travel> {
  public async findById(id: string): Promise<Travel | undefined> {
    const travel = this.findOne(id, {
      relations: ['airplane', 'travel_travellers']
    });

    return travel;
  }

  public async createTravel({ date, airplane }: IRequest): Promise<Travel> {
    const travel = this.create({
      airplane,
      date,
    });

    await this.save(travel);

    return travel;
  }
}