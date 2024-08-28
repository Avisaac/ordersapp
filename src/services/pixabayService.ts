import axios from 'axios';
import { config } from '../config/config';
import logger from '../utils/logger';

export const getRandomPhotos = async (count: number): Promise<string[]> => {
  try {
    const totalResponse = await axios.get(config.pixabayApiUrl, {
      params: {
        key: config.pixabayApiKey,
      },
    });

    const perPage = Math.max(count, config.minPixabayPerPageParam);
    const totalHits = totalResponse.data.totalHits;
    const maxPage = Math.floor(totalHits / perPage);
    const randomPage = Math.floor(Math.random() * maxPage);

    const response = await axios.get(config.pixabayApiUrl, {
      params: {
        key: config.pixabayApiKey,
        per_page: perPage,
        page: randomPage,
        safesearch: true,
      },
    });

    if (response.data.hits && response.data.hits.length > 0) {
      const shuffled = response.data.hits.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count).map((hit: any) => hit.webformatURL);
    }

    return [];
  } catch (error) {
    logger.error('Error fetching photos from Pixabay:', error);
    throw new Error('Failed to fetch photos');
  }
};