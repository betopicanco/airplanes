import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import TypeTraveller from "../typeorm/entities/TypeTraveller";
import TypeTravellerRepository from "../typeorm/repositories/TypeTravellerRepository";

interface IRequest {
  id: string
}

export default class ShowTypeTravellerService {
  public async execute({ id }: IRequest): Promise<TypeTraveller> {
    const typeTravellerRepository = getCustomRepository(TypeTravellerRepository);

    const typeTraveller = await typeTravellerRepository.findOne(id);

    if(!typeTraveller) throw new AppError('Type Traveller not found');

    return typeTraveller;
  }
}