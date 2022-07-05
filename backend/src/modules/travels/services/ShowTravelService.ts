import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Travel from "../typeorm/entities/Travel";
import TravelRepository from "../typeorm/repositories/TravelsRepository";

interface IRequest {
  id: string,
}

interface IResponse {
  travel: Travel,
  travel_travellers_ids: {
    id: string
  }[] 
}

export default class ShowTravelService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    const travelRepo = getCustomRepository(TravelRepository);

    const travel = await travelRepo.findById(id);

    if(!travel) {
      throw new AppError('Travel not found.');
    }

    const travel_travellers_ids = travel.travel_travellers.map((travel_traveller) => {
      return {
        id: travel_traveller.id
      };
    })

    return {
      travel,
      travel_travellers_ids
    };
  }
}