import { Request, Response } from "express";
import AddTravelTravellerService from "../services/AddTravelTravellerService";
import CreateTravelService from "../services/CreateTravelService";
import ListTravelService from "../services/ListTravelService";
import ShowTravelService from "../services/ShowTravelService";

type ControllerFn = (req: Request, res: Response) => Promise<Response> 

export default class TravelsController {
  public index: ControllerFn = async (req, res) => {
    const listTravels = new ListTravelService();

    const travels = await listTravels.execute();

    return res.json(travels);
  }
  
  public show: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const showTravel = new ShowTravelService();

    const travel = await showTravel.execute({ id });

    return res.json(travel);
  }

  public create: ControllerFn = async (req, res) => {
    const { airplane_id, date } = req.body;

    const createTraveller = new CreateTravelService();
    
    const travel = await createTraveller.execute({
      airplane_id,
      date,
    });

    return res.json(travel);
  }

  public addTraveller: ControllerFn = async (req, res) => {
    const { 
      travel_id, 
      email_traveller, 
      type_traveller_id  
    } = req.body;

    const addTravelTraveller = new AddTravelTravellerService();

    const travelTraveller = await addTravelTraveller.execute({
      travel_id,
      email_traveller,
      type_traveller_id
    });

    return res.json(travelTraveller);
  }
}