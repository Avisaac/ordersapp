import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import photoRoutes from './routes/photoRoutes';
import orderRoutes from './routes/orderRoutes';
import { errorHandler } from './middleware/errorHandler';
import { config } from './config/config';
import connectToMongoDB from './db';
import logger from './utils/logger';
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use('/api/photos', photoRoutes);
app.use('/api/orders', orderRoutes);

connectToMongoDB();

const PORT = config.port;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;