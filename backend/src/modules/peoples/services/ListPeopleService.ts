import { getCustomRepository } from "typeorm";
import PeopleRepository from "../typeorm/repositories/PeopleRepository";
import People from "../typeorm/entities/People";

export default class ListPeopleService {
  public async execute(): Promise<People[]> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.find();

    return people;
  }
}