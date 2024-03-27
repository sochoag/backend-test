import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, isNumber, minLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly password: string;

}