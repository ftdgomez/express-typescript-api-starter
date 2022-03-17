import log from 'pino';

export const logger = log({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    }
  }
});

export default logger;
