import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CONFIG_FEATURES } from 'src/utils/config';

@Module({
  imports: [...CONFIG_FEATURES],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
