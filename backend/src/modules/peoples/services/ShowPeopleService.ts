import { getCustomRepository } from "typeorm"
import AppError from '@shared/errors/AppErrors';
import People from "../typeorm/entities/People";
import PeopleRepository from "../typeorm/repositories/PeopleRepository";

interface IRequest {
  id: string
}

export default class ShowPeopleService {
  public async execute({ id }: IRequest): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.findOne(id);

    if(!people) throw new AppError('People not found');

    return people;
  }
}