import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logger from './utils/logger';
import routes from './routes';
import morgan from 'morgan';
import { errorHandler } from './utils/errorHandler';

dotenv.config();
const PORT = process.env.PORT || 1142;
const app = express();
app.use(cors());
// @ts-ignore
app.options('*', cors());
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
routes(app);
app.use(errorHandler)
app.listen(PORT, async () => {
  logger.info(`Server listening on port ${PORT}`);
});
