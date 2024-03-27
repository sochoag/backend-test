import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService { 
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async signIn(
    usermail: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.getUserbyMail(usermail);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.name, usermail: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
