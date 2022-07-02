import { Router } from "express";
import AirplaneController from "../controllers/AirplaneControllers";
import { celebrate, Joi, Segments } from 'celebrate';

const airplaneRouter = Router();
const airplaneController = new AirplaneController();

airplaneRouter.get('/', airplaneController.index);

airplaneRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  airplaneController.show
);

airplaneRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      place: Joi.string().required(),
      model: Joi.string().required(),
      airline: Joi.string().required(),
      baggage_limit: Joi.number().integer().required(),
      seat_limit: Joi.number().precision(2).required()
    }
  }),
  airplaneController.create
)

airplaneRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
      model: Joi.string().required(),
      airline: Joi.string().required(),
      baggage_limit: Joi.number().integer().required(),
      seat_limit: Joi.number().precision(2).required()
    }
  }),
  airplaneController.update
);

airplaneRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  airplaneController.delete
);

export default airplaneRouter;