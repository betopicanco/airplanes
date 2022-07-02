import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Airplane from "../typeorm/entities/Airplane";
import AirplaneRepository from "../typeorm/repositories/AirplaneRepository";

interface IRequest {
  place: string,
  model: string,
  airline: string,
  baggage_limit: number,
  seat_limit: number
}

export default class CreateAirplaneService {
  public async execute(
    { place, model, airline, baggage_limit, seat_limit }: IRequest
  ): Promise<Airplane> { 
    const airplaneRepository = getCustomRepository(AirplaneRepository);

    const placeExists = await airplaneRepository.findByPlace(place);

    if(placeExists) {
      throw new AppError('There is already one airplane with this place');
    }

    const airplane = airplaneRepository.create({
      place,
      model,
      airline,
      baggage_limit,
      seat_limit
    });

    await airplaneRepository.save(airplane);

    return airplane;
  }
}