import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Traveller from "../typeorm/entities/Traveller";
import TravellerRepository from "../typeorm/repositories/TravellerRepository";

interface IRequest {
  name: string,
  email: string,
  birth: Date
}

export default class CreateTravellerService {
  public async execute(
    { name, email, birth }: IRequest
  ): Promise<Traveller> { 
    const travellerRepository = getCustomRepository(TravellerRepository);

    const emailExists = await travellerRepository.findByEmail(email);

    if(emailExists) throw new AppError('Email is already used');

    const traveller = travellerRepository.create({
      name,
      email,
      birth
    });

    await travellerRepository.save(traveller);

    return traveller;
  }
}