import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import TravelTravellerRepository from "../typeorm/repositories/TravelTravellersRepository";

interface IRequest {
  id: string
}

export default class DeleteTravelTravellerService {
  public async execute({ id }: IRequest): Promise<void> {
    const travelTravellerRepo = getCustomRepository(TravelTravellerRepository);

    const travelTraveller = await travelTravellerRepo.findOne(id);

    if(!travelTraveller) throw new AppError('Travel traveller not found');

    await travelTravellerRepo.remove(travelTraveller);
  }
}