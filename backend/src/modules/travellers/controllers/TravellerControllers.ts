import { Request, Response } from "express";
import CreateTravellerService from "../services/CreateTravellerService";
import DeleteTravellerService from "../services/DeleteTravellerService";
import ListTravellerService from "../services/ListTravellerService";
import ShowTravellerService from "../services/ShowTravellerService";
import UpdateTravellerService from "../services/UpdateTravellerService";

type ControllerFn = (req: Request, res: Response) => Promise<Response>;

export default class TravellerController {
  public index: ControllerFn = async (req, res) => {
    const listtravellers = new ListTravellerService();

    const travellers = await listtravellers.execute();

    return res.json(travellers);
  }

  public show: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const showTravellers = new ShowTravellerService();

    const travellers = await showTravellers.execute({ id });

    return res.json(travellers);
  }

  public create: ControllerFn = async (req, res) => {
    const { name, email, birth } = req.body;

    const createTraveller = new CreateTravellerService();

    const traveller = await createTraveller.execute({
      name,
      email,
      birth
    });

    return res.json(traveller);
  }

  public update: ControllerFn = async (req, res) => {
    const { id } = req.params;
    const { name, email, birth } = req.body;

    const updateTraveller = new UpdateTravellerService();

    const traveller = await updateTraveller.execute({
      id,
      name,
      birth
    })

    return res.json(traveller);
  }

  public delete: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const deleteTraveller = new DeleteTravellerService();

    await deleteTraveller.execute({ id });

    return res.json([]);
  }
}