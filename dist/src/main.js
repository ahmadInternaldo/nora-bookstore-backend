"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const interceptor_1 = require("./utils/interceptor");
const filter_exception_1 = require("./utils/filter-exception");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new interceptor_1.Interceptor());
    app.useGlobalFilters(new filter_exception_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    if (process.env.NODE_ENV === 'development') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Nora Bookstore API')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    await app.listen(process.env.NODE_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map