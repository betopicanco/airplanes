import { getCustomRepository } from "typeorm";
import TypeTraveller from "../typeorm/entities/TypeTraveller";
import TypeTravellerRepository from "../typeorm/repositories/TypeTravellerRepository";

export default class ListDrawMemberService {
  public async execute(): Promise<TypeTraveller[]> {
    const typeTravellerRepo = getCustomRepository(TypeTravellerRepository);

    const drawMembers = await typeTravellerRepo.findDrawMembers();

    return drawMembers;
  }
}