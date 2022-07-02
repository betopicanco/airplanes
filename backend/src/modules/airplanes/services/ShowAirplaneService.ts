import { getCustomRepository } from "typeorm"
import Airplane from "../typeorm/entities/Airplane";
import AirplaneRepository from "../typeorm/repositories/AirplaneRepository"
import AppError from '@shared/errors/AppErrors';

interface IRequest {
  id: string
}

export default class ShowAirplaneService {
  public async execute({ id }: IRequest): Promise<Airplane> {
    const airplaneRepository = getCustomRepository(AirplaneRepository);

    const airplane = await airplaneRepository.findOne(id);

    if(!airplane) throw new AppError('Airplane not found');

    return airplane;
  }
}