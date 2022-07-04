import { getCustomRepository } from "typeorm";
import Traveller from "../typeorm/entities/Traveller";
import TravellerRepository from "../typeorm/repositories/TravellerRepository";

export default class ListTravellerService {
  public async execute(): Promise<Traveller[]> {
    const travellerRepository = getCustomRepository(TravellerRepository);

    const traveller = await travellerRepository.find();

    return traveller;
  }
}