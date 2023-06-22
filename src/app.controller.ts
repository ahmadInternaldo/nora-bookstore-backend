import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseInterface } from './utils/response.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('MISC API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async upServer(): Promise<ResponseInterface> {
    return this.appService.upServer();
  }
}
