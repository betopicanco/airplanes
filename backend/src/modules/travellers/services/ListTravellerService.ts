import { getCustomRepository } from "typeorm";
import Traveller from "../typeorm/entities/Traveller";
import TravellerRepository from "../typeorm/repositories/TravellerRepository";

interface IRequest {
  traveller: Traveller
}

export default class ListTravellerService {
  public async execute(): Promise<Traveller[]> {
    const travellerRepo = getCustomRepository(TravellerRepository);

    const traveller = await travellerRepo.find({
      relations: ['travel_traveller']
    });

    return traveller;
  }
}