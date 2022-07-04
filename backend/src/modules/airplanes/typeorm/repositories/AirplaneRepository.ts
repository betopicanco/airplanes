import { EntityRepository, Repository } from "typeorm";
import Airplane from "../entities/Airplane";

@EntityRepository(Airplane)
export default class AirplaneRepository extends Repository<Airplane> {
  // Busca um avião pelo modelo
  public async findByPlace(place: string): Promise<Airplane | undefined> {
    const airplane = await this.findOne({
      where: {
        place
      }
    });

    return airplane;
  }

  public async findById(id: string): Promise<Airplane | undefined> {
    const airplane = await this.findOne({
      where: {
        id
      }
    });

    return airplane;
  }
}