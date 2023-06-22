import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResponseInterface } from 'src/utils/response.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth API')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('login')
  // async login(@Body() loginDto: LoginDto): Promise<ResponseInterface> {
  //   return this.authService.login(loginDto);
  // }
}
