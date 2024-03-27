import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'src/service/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  
  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(@Body() singInDto: Record<string, any>)
  {
    return this.authService.signIn(singInDto.userEmail, singInDto.password)
  }
}
