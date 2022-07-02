import airplaneRouter from '@modules/airplanes/routes/airplanes.routes';
import peopleRouter from '@modules/peoples/routes/peoples.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/airplanes', airplaneRouter);
routes.use('/peoples', peopleRouter);

export default routes;