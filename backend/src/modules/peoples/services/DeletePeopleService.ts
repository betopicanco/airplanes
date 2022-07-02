import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm"
import PeopleRepository from "../typeorm/repositories/PeopleRepository";

interface IRequest {
  id: string
}

export default class DeletePeopleService {
  public async execute({ id }: IRequest): Promise<void> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.findOne(id);

    if(!people) throw new AppError('People not found');

    await peopleRepository.remove(people);
  }
}