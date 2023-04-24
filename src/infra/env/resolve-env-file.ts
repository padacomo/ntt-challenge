export const resolveEnvFile = (): string =>
  process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
