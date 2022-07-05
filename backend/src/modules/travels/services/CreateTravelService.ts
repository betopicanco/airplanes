import AirplaneRepository from "@modules/airplanes/typeorm/repositories/AirplaneRepository";
import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import TravelRepository from "../typeorm/repositories/TravelsRepository";

interface ITravelTravellers {
  id: string,
  type_traveller_id: string
}

interface IRequest {
  airplane_id: string;
  date: Date
}

export default class CreateTravelService {
  public async execute({ airplane_id, date }: IRequest){
    const travelReposiry = getCustomRepository(TravelRepository);
    const airplaneRepository = getCustomRepository(AirplaneRepository);

    const airplaneExists = await airplaneRepository.findById(airplane_id);

    if(!airplaneExists) {
      throw new AppError('Could not find any airplane with the given id');
    }

    const travel = await travelReposiry.createTravel({
      airplane: airplaneExists,
      date,
    });

    return travel;
  }
}