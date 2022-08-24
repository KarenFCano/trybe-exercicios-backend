import connection from "../models/connection";
import UserModel from "../models/user.model";
import User from "../interfaces/user.interface";
import { NotFoundError } from 'restify-errors';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public async update(id: number, user: User) {
    const userFound = await this.model.getById(id);
    if(!userFound) { 
      throw new NotFoundError('User not found');
    }
    await this.model.update(id, user);
    return (user);
  }
  
  public async delete(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('User not found');
    }
    await this.model.delete(id);
  }

}

export default UserService;

