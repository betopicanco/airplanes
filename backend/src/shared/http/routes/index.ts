import airplaneRouter from '@modules/airplanes/routes/airplanes.routes';
import travellerRouter from '@modules/travellers/routes/travellers.routes';
import travelsRouter from '@modules/travels/routes/travels.routes';
import travelTravellersRouter from '@modules/travels/routes/traveltravellers.routes';
import typeTravellerRouter from '@modules/types_travellers/routes/typetravellers.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/airplanes', airplaneRouter);
routes.use('/travellers', travellerRouter);
routes.use('/travels', travelsRouter);
routes.use('/typestravellers', typeTravellerRouter);
routes.use('/traveltravellers', travelTravellersRouter);

export default routes;