import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Traveller from "../typeorm/entities/Traveller";
import TravellerRepository from "../typeorm/repositories/TravellerRepository";

interface IRequest {
  id: string,
  name: string,
  birth: Date
}

export default class UpdateTravellerService {
  public async execute(
    { id, name, birth }: IRequest
  ): Promise<Traveller> {
    const travellerRepository = getCustomRepository(TravellerRepository);

    const traveller = await travellerRepository.findOne(id);

    if(!traveller) throw new AppError('Traveller not found');

    traveller.name = name;
    traveller.birth = birth;

    await travellerRepository.save(traveller);

    return traveller;
  }
}