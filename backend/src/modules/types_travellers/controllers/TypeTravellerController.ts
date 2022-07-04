import { Request, Response } from "express";
import ListDrawMemberService from "../services/ListDrawmMemberService";
import ListTypeTravellersService from "../services/ListTypeTravellerService";
import ShowTypeTravellerService from "../services/ShowTypeTravellerService";

type ControllerFn = (req: Request, res: Response) => Promise<Response>;

export default class TypeTravellerController {
  public index: ControllerFn = async (req, res) => {
    const listTypesTravellers = new ListTypeTravellersService();

    const typesTravellers = await listTypesTravellers.execute();

    return res.json(typesTravellers);
  }

  public show: ControllerFn = async (req, res) => {
    const { id } = req.params;

    const showTypesTravellers = new ShowTypeTravellerService();

    const typeTraveller = showTypesTravellers.execute({ id });

    return res.json(typeTraveller);
  }

  public drawMember: ControllerFn = async (req, res) => {
    const listDrawMembers = new ListDrawMemberService();

    const drawMembers = await listDrawMembers.execute();
    
    return res.json(drawMembers);
  }
}