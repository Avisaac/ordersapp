import express from 'express';
import { getRandomPhotoUrls } from '../controllers/photoController';

const router = express.Router();

router.get('/random/:count', getRandomPhotoUrls);

export default router;