import { EntityRepository, Repository } from "typeorm";
import People from "../entities/People";

@EntityRepository(People)
export default class PeopleRepository extends Repository<People> {
  // Busca um avião pelo modelo
  public async findByEmail(email: string): Promise<People | undefined> {
    const people = await this.findOne({
      where: {
        email
      }
    });

    return people;
  }
}