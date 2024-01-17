import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('local/signup')
  signupLocal(@Body() dto: CreateUserDto) {
    this.authService.signupLocal(dto);
  }

  @Post('local/signin')
  signinLocal() {
    this.authService.signinLocal();
  }

  @Post('logout')
  logout() {
    this.authService.logout();
  }

  @Post('refresh')
  refreshTokens() {
    this.authService.refreshTokens();
  }
}
