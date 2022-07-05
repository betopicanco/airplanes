import { EntityRepository, Repository } from "typeorm";
import TypeTraveller from "../entities/TypeTraveller";

@EntityRepository(TypeTraveller)
export default class TypeTravellerRepository extends Repository<TypeTraveller> {
  public async findById(id: string): Promise<TypeTraveller | undefined> {
    const typeTraveller = await this.findOne({
      where: {
        id
      }
    });

    return typeTraveller;
  }

  public async findCrewMembers() {
    const crewMembers = await this.find({
      where: {
        is_crew_member: true
      }
    });

    return crewMembers;
  }
}