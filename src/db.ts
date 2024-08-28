import mongoose from 'mongoose';
import logger from './utils/logger';
import { config } from './config/config';

const connectToMongoDB = () => {
  logger.info('Attempting MongoDB connection...');

  mongoose.connect(config.mongodbUri as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => logger.info('Connected to MongoDB'))
  .catch((error) => {
    logger.error('MongoDB connection error:', error);
    setTimeout(connectToMongoDB, 5000); 
  });
};

// might want to do some actions if one of those events happen for consistency
mongoose.connection.on('connected', () => {
  logger.info('MongoDB connected');
});

mongoose.connection.on('disconnected', () => {
  logger.warn('MongoDB disconnected. Attempting to reconnect...');
});

mongoose.connection.on('reconnected', () => {
  logger.info('MongoDB reconnected');
});

mongoose.connection.on('error', (err) => {
  logger.error('MongoDB connection error:', err);
});

export default connectToMongoDB;
