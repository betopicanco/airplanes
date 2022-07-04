import { getCustomRepository } from "typeorm";
import TypeTraveller from "../typeorm/entities/TypeTraveller";
import TypeTravellerRepository from "../typeorm/repositories/TypeTravellerRepository";

export default class ListTypeTravellersService {
  public async execute(): Promise<TypeTraveller[]> {
    const typeTravellerRepository = getCustomRepository(TypeTravellerRepository);

    const typesTravellers = await typeTravellerRepository.find();

    return typesTravellers;
  }
}