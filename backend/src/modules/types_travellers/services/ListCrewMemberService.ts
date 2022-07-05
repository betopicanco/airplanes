import { getCustomRepository } from "typeorm";
import TypeTraveller from "../typeorm/entities/TypeTraveller";
import TypeTravellerRepository from "../typeorm/repositories/TypeTravellerRepository";

export default class ListCrewMemberService {
  public async execute(): Promise<TypeTraveller[]> {
    const typeTravellerRepo = getCustomRepository(TypeTravellerRepository);

    const crewMembers = await typeTravellerRepo.findCrewMembers();

    return crewMembers;
  }
}