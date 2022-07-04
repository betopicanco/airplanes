import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm"
import TravellerRepository from "../typeorm/repositories/TravellerRepository";

interface IRequest {
  id: string
}

export default class DeleteTravellerService {
  public async execute({ id }: IRequest): Promise<void> {
    const travellerRepository = getCustomRepository(TravellerRepository);

    const traveller = await travellerRepository.findOne(id);

    if(!traveller) throw new AppError('Traveller not found');

    await travellerRepository.remove(traveller);
  }
}