import { getRandomPhotos } from '../services/pixabayService';
import { Request, Response } from 'express';
import { config } from '../config/config';

export const getRandomPhotoUrls = async (req: Request, res: Response) => {
  const count = parseInt(req.params.count);

  if (isNaN(count) || count < 1 || count > config.maxPixabayImagesAmount) {
    return res.status(400).json({ error: 'Invalid count. Must be between 1 and 100.' });
  }

  try {
    const photoUrls = await getRandomPhotos(count);
    res.json({ imageUrls: photoUrls });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
};