import { Document, NumberExpression } from "mongoose";

export interface IUser extends Document{
  readonly name: string;
  readonly email: string;
  readonly age: number;
  readonly password: string;
}