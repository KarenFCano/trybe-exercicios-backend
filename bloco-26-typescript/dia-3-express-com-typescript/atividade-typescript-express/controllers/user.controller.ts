import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../middlewares/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    console.log('controller');
    res.status(StatusCodes.OK).json(users);
  };
}

export default UserController;

export function getAll(arg0: string, getAll: any) {
  throw new Error('Function not implemented.');
}
