"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_1 = require("./infra/env");
const healthcheck_module_1 = require("./modules/healthcheck/healthcheck.module");
const movie_module_1 = require("./modules/movie/movie.module");
const typeorm_1 = require("@nestjs/typeorm");
const db_config_1 = require("./configs/db.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(db_config_1.typeOrmConfig),
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: (0, env_1.resolveEnvFile)() }),
            healthcheck_module_1.HealthCheckModule,
            movie_module_1.MovieModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map