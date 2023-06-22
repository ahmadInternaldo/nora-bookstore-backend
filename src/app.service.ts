import { Injectable } from '@nestjs/common';
import { ResponseInterface } from './utils/response.interface';
import { CustomSuccess } from './utils/transform';

@Injectable()
export class AppService {
  async upServer(): Promise<ResponseInterface> {
    return new CustomSuccess('server up!').execute();
  }
}
