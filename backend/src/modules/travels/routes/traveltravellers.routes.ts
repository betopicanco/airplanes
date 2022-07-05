import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import TravelsController from '../controllers/TravelsController';

const travelTravellersRouter = Router();
const travelsController = new TravelsController();

travelTravellersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      travel_travellers: Joi.array().required()
    },
  }),
  travelsController.listTravellers
);

travelTravellersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  travelsController.deleteTraveller
)

export default travelTravellersRouter;