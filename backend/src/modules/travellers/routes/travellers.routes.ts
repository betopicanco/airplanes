import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import TravellerController from "../controllers/TravellerControllers";

const travellerRouter = Router();
const travellerController = new TravellerController();

travellerRouter.get('/', travellerController.index);

travellerRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  travellerController.show
);

travellerRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      birth: Joi.date().required()
    }
  }),
  travellerController.create
)

travellerRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      birth: Joi.date().required()
    }
  }),
  travellerController.update
);

travellerRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  travellerController.delete
);

export default travellerRouter;