import { EntityRepository, Repository } from "typeorm";
import Traveller from "../entities/Traveller";

@EntityRepository(Traveller)
export default class TravellerRepository extends Repository<Traveller> {
  public async findByEmail(email: string): Promise<Traveller | undefined> {
    const traveller = await this.findOne({
      where: {
        email
      }
    });

    return traveller;
  }

  public async findById(id: string): Promise<Traveller | undefined> {
    const traveller = await this.findOne({
      where: {
        id
      }
    });

    return traveller;
  }
}