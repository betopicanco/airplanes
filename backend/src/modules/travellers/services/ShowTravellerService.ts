import { getCustomRepository } from "typeorm"
import AppError from '@shared/errors/AppErrors';
import TravellerRepository from "../typeorm/repositories/TravellerRepository";
import Traveller from "../typeorm/entities/Traveller";
import TravelTravellerRepository from "@modules/travels/typeorm/repositories/TravelTravellersRepository";

interface IRequest {
  id: string
}

interface IResponse {
  traveller: Traveller,
  travel_travellers: any
}

export default class ShowTravellerService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    const travellerRepo = getCustomRepository(TravellerRepository);
    const travelTravellerRepo = getCustomRepository(TravelTravellerRepository);

    const traveller = await travellerRepo.findById(id);

    if(!traveller) throw new AppError('Traveller not found');

    const travel_traveller_ids = traveller.travel_traveller.map((travel_traveller) => {
      return travel_traveller.id;
    })

    const travel_travellers = await travelTravellerRepo.findByIds(travel_traveller_ids, {
      relations: ['travel', 'type_traveller']
    });

    return {
      traveller,
      travel_travellers
    };
  }
}