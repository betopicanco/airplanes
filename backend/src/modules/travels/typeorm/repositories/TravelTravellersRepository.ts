import Traveller from "@modules/travellers/typeorm/entities/Traveller";
import TypeTraveller from "@modules/types_travellers/typeorm/entities/TypeTraveller";
import { EntityRepository, Repository } from "typeorm";
import Travel from "../entities/Travel";
import TravelsTravellers from "../entities/TravelsTravellers";

interface IRequest {
  travel: Travel,
  traveller: Traveller,
  type_traveller: TypeTraveller
}

@EntityRepository(TravelsTravellers)
export default class TravelTravellerRepository extends Repository<TravelsTravellers> {
  public async createTravelTraveller(
    { travel, traveller, type_traveller }: IRequest
  ): Promise<TravelsTravellers> {
    const travelTraveller = this.create({
      travel,
      traveller,
      type_traveller,
    })

    await this.save(travelTraveller);

    return travelTraveller;
  }

  public async list(ids: string[] ): Promise<TravelsTravellers[]> {
    const travelTravellers = this.findByIds(ids, {
      relations: ['type_traveller', 'traveller']
    });

    return travelTravellers;
  }

  public async findById(id: string): Promise<TravelsTravellers | undefined> {
    const travelTraveller = this.findOne(id, {
      relations: ['type_traveller', 'traveller', 'travel']
    });

    return travelTraveller;
  }

  public async findByTravel(travel: Travel): Promise<TravelsTravellers[] | undefined> {
    const travelsTravellers = this.find({
      where: {
        travel
      },
      relations: ['traveller', 'type_traveller']
    });

    return travelsTravellers;
  }
}