import { findAllCategories } from './category.repository.js';

export const fetchCategoriesService = (limit) => {
  return findAllCategories(limit);
};
