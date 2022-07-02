import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Airplane from "../typeorm/entities/Airplane";
import AirplaneRepository from "../typeorm/repositories/AirplaneRepository";

interface IRequest {
  id: string,
  model: string,
  airline: string,
  baggage_limit: number,
  seat_limit: number
}

export default class UpdateAirplaneService {
  public async execute(
    { id, model, airline, baggage_limit, seat_limit }: IRequest
  ): Promise<Airplane> {
    const airplaneRepository = getCustomRepository(AirplaneRepository);

    const airplane = await airplaneRepository.findOne(id);

    if(!airplane) throw new AppError('Airplane not found');

    airplane.model = model;
    airplane.airline = airline;
    airplane.baggage_limit = baggage_limit;
    airplane.seat_limit = seat_limit;

    await airplaneRepository.save(airplane);

    return airplane;
  }
}