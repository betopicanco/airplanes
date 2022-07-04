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
}