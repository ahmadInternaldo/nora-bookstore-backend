import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_ROOTS } from './utils/config';

@Module({
  imports: [...CONFIG_ROOTS],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
