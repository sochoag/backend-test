import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/schema/user.schema';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[MongooseModule.forFeature([{name: 'User', schema:userSchema}])]
})
export class UserModule {}
