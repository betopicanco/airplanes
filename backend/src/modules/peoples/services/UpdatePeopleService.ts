import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import People from "../typeorm/entities/People";
import PeopleRepository from "../typeorm/repositories/PeopleRepository";

interface IRequest {
  id: string,
  name: string,
  email: string
}

export default class UpdatePeopleService {
  public async execute(
    { id, name, email }: IRequest
  ): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.findOne(id);

    if(!people) throw new AppError('People not found');

    const emailExists = await peopleRepository.findByEmail(email);

    if(emailExists && email !== people.email) {
      throw new AppError('Email is already used');
    }

    people.name = name;
    people.email = email;

    await peopleRepository.save(people);

    return people;
  }
}