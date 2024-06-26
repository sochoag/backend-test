import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sochoag:MnwvYyPFnDwkmnto@backend-test.edfvl2l.mongodb.net/',
      { dbName: 'backend-test-db' },
    ),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
