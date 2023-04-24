"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_constants_1 = require("./swagger.constants");
const setupSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(swagger_constants_1.SWAGGER_TITLE)
        .setDescription(swagger_constants_1.SWAGGER_DESCRIPTION)
        .setVersion(swagger_constants_1.SWAGGER_VERSION)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(swagger_constants_1.SWAGGER_URL, app, document);
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.config.js.map