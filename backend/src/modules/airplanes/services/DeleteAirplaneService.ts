import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm"
import AirplaneRepository from "../typeorm/repositories/AirplaneRepository"

interface IRequest {
  id: string
}

export default class DeleteAirplaneService {
  public async execute({ id }: IRequest): Promise<void> {
    const airplaneRepository = getCustomRepository(AirplaneRepository);

    const airplane = await airplaneRepository.findOne(id);

    if(!airplane) throw new AppError('Airplane not found');

    await airplaneRepository.remove(airplane);
  }
}