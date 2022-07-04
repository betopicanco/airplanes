import { getCustomRepository } from "typeorm";
import Travel from "../typeorm/entities/Travel";
import TravelRepository from "../typeorm/repositories/TravelsRepository";

export default class ListTravelService {
  public async execute(): Promise<Travel[]> {
    const travelRepository = getCustomRepository(TravelRepository);

    const travels = await travelRepository.find({
      relations: ['airplane']
    });

    return travels;
  }
}