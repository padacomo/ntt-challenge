"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const app_pipes_1 = require("./app.pipes");
const filters_1 = require("./commons/filters");
const swagger_1 = require("./infra/swagger");
const app_constants_1 = require("./app.constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableShutdownHooks();
    app.enableVersioning({ type: common_1.VersioningType.URI });
    app.useGlobalPipes(...app_pipes_1.appPipes);
    app.useGlobalFilters(new filters_1.AppExceptionFilter());
    app.setGlobalPrefix(app_constants_1.API_ROOT_URL, {
        exclude: [{ path: app_constants_1.HEALTH_CHECK_URL, method: common_1.RequestMethod.GET }],
    });
    (0, swagger_1.setupSwagger)(app);
    await app.listen(app_constants_1.SERVER_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map