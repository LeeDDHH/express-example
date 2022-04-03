import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from "express";

const { CREATED, OK } = StatusCodes;

const router: Router = Router();

router.get('/', (req: Request,res: Response): Response => {
  return res.status(OK).json({"msg": "good"});
});

export default router;
