import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import People from "../typeorm/entities/People";
import PeopleRepository from "../typeorm/repositories/PeopleRepository";

interface IRequest {
  name: string,
  email: string,
}

export default class CreatePeopleService {
  public async execute(
    { name, email }: IRequest
  ): Promise<People> { 
    const peopleRepository = getCustomRepository(PeopleRepository);

    const emailExists = await peopleRepository.findByEmail(email);

    if(emailExists) throw new AppError('Email is already used');

    const people = peopleRepository.create({
      name,
      email
    });

    await peopleRepository.save(people);

    return people;
  }
}