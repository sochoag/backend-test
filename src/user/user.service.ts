import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/interface/user.interface';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>)
  { }
  
  async createUser(createUserDto: CreateUserDto):
    Promise<IUser>
  {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto):
    Promise<IUser>
  {
    const existingUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true });
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }

  async getAllUsers():
    Promise<IUser[]>
  {
    const userData = await this.userModel.find();
    if (!userData || userData.length == 0)
    {
      throw new NotFoundException('Users data not found!')  
    }
    return userData;
  }

  async getUser(userId: string):
    Promise<IUser>
  {
    const existingUser = await this.userModel.findById(userId).exec();
    if (!existingUser)
    {
      throw new NotFoundException(`User #${userId} not found`)  
    }
    return existingUser;
  }

  async deleteUser(userId: string):
    Promise<IUser>
  {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      throw new NotFoundException(`User #${userId} not found`)
    }
    return deletedUser;
  }

  async getUserbyMail(userEmail: string):
    Promise<IUser>
  {
    const userByMail = await this.userModel.findOne({email:userEmail})
    if (!userByMail)
    {
      throw new NotFoundException(`User ${userEmail} not found`)
    }
    return userByMail
  }
}
