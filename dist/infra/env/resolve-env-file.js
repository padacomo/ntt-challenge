"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEnvFile = void 0;
const resolveEnvFile = () => process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
exports.resolveEnvFile = resolveEnvFile;
//# sourceMappingURL=resolve-env-file.js.map