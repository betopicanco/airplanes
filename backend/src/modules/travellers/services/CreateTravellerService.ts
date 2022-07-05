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
    const travellerRepo = getCustomRepository(TravellerRepository);

    const emailExists = await travellerRepo.findByEmail(email);

    if(emailExists) throw new AppError('Email is already used');

    const traveller = travellerRepo.create({
      name,
      email,
      birth
    });

    await travellerRepo.save(traveller);

    return traveller;
  }
}