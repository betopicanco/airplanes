import { getCustomRepository } from "typeorm";
import TravelTravellerRepository from "../typeorm/repositories/TravelTravellersRepository";

interface IRequest {
  travel_travellers: {id: string}[]
}

interface IResponse {
  passengers: {}[],
  crewMembers: {}[]
}

export default class ListTravelTravellersService {
  public async execute({ travel_travellers }: IRequest): Promise<IResponse> {
    const travelTravellerRepo = getCustomRepository(TravelTravellerRepository);

    const ids = travel_travellers.map((travel_traveller) => {
      return travel_traveller.id;
    })

    const travelTravellers = await travelTravellerRepo.list(ids);

    const passengers = travelTravellers.filter((travelTraveller) => {
      return travelTraveller.type_traveller.is_crew_member == false;
    });

    const crewMembers = travelTravellers.filter((travelTraveller) => {
      return travelTraveller.type_traveller.is_crew_member == true;
    });

    return {
      passengers,
      crewMembers
    };
  }
}