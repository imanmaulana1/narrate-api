import { findAllTags } from './tag.repository.js';

export const fetchTagsService = async (limit, search) => {
  return await findAllTags(limit, search);
};
