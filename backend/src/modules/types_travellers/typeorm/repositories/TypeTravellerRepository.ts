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

  public async findDrawMembers() {
    const drawMembers = await this.find({
      where: {
        is_draw_member: true
      }
    });

    return drawMembers;
  }
}