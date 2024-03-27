import { Module } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';
import { AuthController } from 'src/controller/auth/auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: '800670ec-c0b7-4b4e-b9c7-5a050c13a2e2',
      signOptions: {expiresIn:'3600s'}
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
