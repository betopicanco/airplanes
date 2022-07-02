import { getCustomRepository } from "typeorm";
import Airplane from "../typeorm/entities/Airplane";
import AirplaneRepository from "../typeorm/repositories/AirplaneRepository";

export default class ListAirplaneService {
  public async execute(): Promise<Airplane[]> {
    const airplaneRepository = getCustomRepository(AirplaneRepository);

    const airplanes = airplaneRepository.find();

    return airplanes;
  }
}