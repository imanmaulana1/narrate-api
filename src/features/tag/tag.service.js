import { findAllTags } from './tag.repository.js';

export const fetchTagsService = (limit) => {
  return findAllTags(limit);
};
