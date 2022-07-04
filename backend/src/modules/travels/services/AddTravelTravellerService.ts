import TravellerRepository from "@modules/travellers/typeorm/repositories/TravellerRepository";
import TypeTravellerRepository from "@modules/types_travellers/typeorm/repositories/TypeTravellerRepository"
import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm"
import TravelRepository from "../typeorm/repositories/TravelsRepository";
import TravelTravellerRepository from "../typeorm/repositories/TravelTravellersRepository";

interface IRequest {
  travel_id: string,
  email_traveller: string,
  type_traveller_id: string
}

export default class AddTravelTravellerService {
  public async execute(
    { travel_id, email_traveller, type_traveller_id }: IRequest
  ) {
    const travelRepository = getCustomRepository(TravelRepository);
    const travellerRepository = getCustomRepository(TravellerRepository);
    const typeTravellerRepository = getCustomRepository(TypeTravellerRepository);
    const travelTravellerRepository = getCustomRepository(TravelTravellerRepository);

    const travelExists = await travelRepository.findById(travel_id);
    if(!travelExists) {
      throw new AppError('Could not find any airplane with the given id');
    }
    const travellerExists = await travellerRepository.findByEmail(email_traveller);
    if(!travellerExists) {
      throw new AppError('Could not find any traveller with the given email');
    }

    const typeTravellerExists = await typeTravellerRepository.findById(type_traveller_id);
    if(!typeTravellerExists) {
      throw new AppError('Could not find any type of traveller with the given id');
    }

    const travelTraveller = await travelTravellerRepository.createTravelTraveller({
      travel: travelExists,
      traveller: travellerExists,
      type_traveller: typeTravellerExists
    });

    return travelTraveller;
  }
}