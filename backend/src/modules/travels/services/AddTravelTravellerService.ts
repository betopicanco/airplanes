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
    const travelRepos = getCustomRepository(TravelRepository);
    const travellerRepo = getCustomRepository(TravellerRepository);
    const typeTravellerRepo = getCustomRepository(TypeTravellerRepository);
    const travelTravellerRepo = getCustomRepository(TravelTravellerRepository);

    const travelExists = await travelRepos.findById(travel_id);
    if(!travelExists) {
      throw new AppError('Could not find any airplane with the given id');
    }
    const travellerExists = await travellerRepo.findByEmail(email_traveller);
    if(!travellerExists) {
      throw new AppError('Could not find any traveller with the given email');
    }

    const typeTravellerExists = await typeTravellerRepo.findById(type_traveller_id);
    if(!typeTravellerExists) {
      throw new AppError('Could not find any type of traveller with the given id');
    }

    const actualTravelTravellers = await travelTravellerRepo.findByTravel(travelExists);
    if(actualTravelTravellers) {
      actualTravelTravellers.map((travel_traveller) => {
        if(travel_traveller.traveller.id === travellerExists.id) {
          throw new AppError(`
            The traveller already exists on the given travel
          `)
        }

        if(
          (travel_traveller.type_traveller.name === 'PILOTO(A)') && (typeTravellerExists.name === 'PILOTO(A)')
        ) {
          throw new AppError(`
            The pilot already exists
          `)
        }

      })
    }

    const travelTraveller = await travelTravellerRepo.createTravelTraveller({
      travel: travelExists,
      traveller: travellerExists,
      type_traveller: typeTravellerExists
    });

    return travelTraveller;
  }
}