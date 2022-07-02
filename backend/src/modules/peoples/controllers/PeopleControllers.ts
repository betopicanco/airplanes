import { Request, Response } from "express";
import CreatePeopleService from "../services/CreatePeopleService";
import DeletePeopleService from "../services/DeletePeopleService";
import ListPeopleService from "../services/ListPeopleService";
import ShowPeopleService from "../services/ShowPeopleService";
import UpdatePeopleService from "../services/UpdatePeopleService";

type ControllerFn = (req: Request, res: Response) => Promise<Response>;

export default class PeopleController {
  public index: ControllerFn = async (req, res) => {
    const listPeoples = new ListPeopleService();

    const peoples = await listPeoples.execute();

    return res.json(peoples);
  }

  public show: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const showPeoples = new ShowPeopleService();

    const peoples = await showPeoples.execute({ id });

    return res.json(peoples);
  }

  public create: ControllerFn = async (req, res) => {
    const { name, email } = req.body;

    const createPeople = new CreatePeopleService();

    const people = await createPeople.execute({
      name,
      email,
    });

    return res.json(people);
  }

  public update: ControllerFn = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatePeople = new UpdatePeopleService();

    const people = await updatePeople.execute({
      id,
      name,
      email
    })

    return res.json(people);
  }

  public delete: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const deletePeople = new DeletePeopleService();

    await deletePeople.execute({ id });

    return res.json([]);
  }
}