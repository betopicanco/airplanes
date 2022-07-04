import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Travel from "../typeorm/entities/Travel";
import TravelRepository from "../typeorm/repositories/TravelsRepository";

interface IRequest {
  id: string,
}

export default class ShowTravelService {
  public async execute({ id }: IRequest): Promise<Travel> {
    const travelRepository = getCustomRepository(TravelRepository);

    const travel = await travelRepository.findById(id);

    if(!travel) {
      throw new AppError('Travel not found.');
    }

    return travel;
  }
}