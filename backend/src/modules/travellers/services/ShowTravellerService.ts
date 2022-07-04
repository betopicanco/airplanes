import { getCustomRepository } from "typeorm"
import AppError from '@shared/errors/AppErrors';
import TravellerRepository from "../typeorm/repositories/TravellerRepository";
import Traveller from "../typeorm/entities/Traveller";

interface IRequest {
  id: string
}

export default class ShowTravellerService {
  public async execute({ id }: IRequest): Promise<Traveller> {
    const travellerRepository = getCustomRepository(TravellerRepository);

    const traveller = await travellerRepository.findOne(id);

    if(!traveller) throw new AppError('Traveller not found');

    return traveller;
  }
}