import { Request, Response } from "express";
import CreateAirplaneService from "../services/CreateAirplaneService";
import DeleteAirplaneService from "../services/DeleteAirplaneService";
import ListAirplaneService from "../services/ListAirplaneService";
import ShowAirplaneService from "../services/ShowAirplaneService";
import UpdateAirplaneService from "../services/UpdateAirplaneService";

type ControllerFn = (req: Request, res: Response) => Promise<Response>;

export default class AirplaneController {
  public index: ControllerFn = async (req, res) => {
    const listAirplanes = new ListAirplaneService();

    const airplanes = await listAirplanes.execute();

    return res.json(airplanes);
  }

  public show: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const showAirplane = new ShowAirplaneService();

    const airplane = await showAirplane.execute({ id });

    return res.json(airplane);
  }

  public create: ControllerFn = async (req, res) => {
    const { place, model,airline, baggage_limit, seat_limit } = req.body;

    const createAirplane = new CreateAirplaneService();

    const airplane = await createAirplane.execute({
      place,
      model,
      airline,
      baggage_limit,
      seat_limit
    });

    return res.json(airplane);
  }

  public update: ControllerFn = async (req, res) => {
    const { id } = req.params;
    const { model, airline, baggage_limit, seat_limit } = req.body;

    const updateAirplane = new UpdateAirplaneService();

    const airplane = await updateAirplane.execute({
      id,
      model,
      airline,
      baggage_limit,
      seat_limit
    })

    return res.json(airplane);
  }

  public delete: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const deleteAirplane = new DeleteAirplaneService();

    await deleteAirplane.execute({ id });

    return res.json([]);
  }
}