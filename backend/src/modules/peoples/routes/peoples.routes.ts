import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import PeopleController from "../controllers/PeopleControllers";

const peopleRouter = Router();
const peopleController = new PeopleController();

peopleRouter.get('/', peopleController.index);

peopleRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  peopleController.show
);

peopleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
    }
  }),
  peopleController.create
)

peopleRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
    }
  }),
  peopleController.update
);

peopleRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  peopleController.delete
);

export default peopleRouter;