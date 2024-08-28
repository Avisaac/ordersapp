import dotenv from 'dotenv';

dotenv.config();

export const config = {
    pixabayApiKey: process.env.PIXABAY_API_KEY,
    pixabayApiUrl: 'https://pixabay.com/api/',
    mongodbUri: process.env.MONGODB_URI,
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
    maxPixabayImagesAmount: 100,
    minPixabayPerPageParam: 3
  };