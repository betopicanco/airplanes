import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import TravelsController from "../controllers/TravelsController";

const travelsRouter = Router();
const travelsController = new TravelsController();

travelsRouter.get('/', travelsController.index)

travelsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
  }),
  travelsController.show
);

travelsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      airplane_id: Joi.string().uuid().required(),
      date: Joi.date().required()
    }
  }),
  travelsController.create
);

travelsRouter.post(
  '/traveller',
  celebrate({
    [Segments.BODY]: {
      travel_id: Joi.string().uuid().required(),
      email_traveller: Joi.string().required(),
      type_traveller_id: Joi.string().uuid().required() 
    },
  }),
  travelsController.addTraveller
);

export default travelsRouter;