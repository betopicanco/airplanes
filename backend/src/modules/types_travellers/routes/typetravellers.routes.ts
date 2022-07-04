import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import TypeTravellerController from "../controllers/TypeTravellerController";

const typeTravellerRouter = Router();
const typeTravellerController = new TypeTravellerController();

typeTravellerRouter.get('/', typeTravellerController.index);

typeTravellerRouter.get(
  '/draw-members',
  typeTravellerController.drawMember
);

typeTravellerRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  typeTravellerController.show
);



export default typeTravellerRouter;