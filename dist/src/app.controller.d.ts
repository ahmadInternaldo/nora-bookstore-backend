import { AppService } from './app.service';
import { ResponseInterface } from './utils/response.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    upServer(): Promise<ResponseInterface>;
}
