import { Router } from 'express';
import userRouter from './user-router';
import helloRouter from './hello';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/hello', helloRouter);


// Export default.
export default baseRouter;
