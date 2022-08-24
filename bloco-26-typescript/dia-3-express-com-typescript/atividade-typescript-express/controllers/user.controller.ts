import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);
    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const createdUser = await this.userService.create(user);
    res.status(StatusCodes.CREATED).json(createdUser);
  }

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;
    const editedUser = await this.userService.update(id, user);
    
    res.status(StatusCodes.OK).json(editedUser);
  }

  public delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.delete(id);
    res.status(StatusCodes.OK).send({message: 'User deleted'});
  }
}

export default UserController;
