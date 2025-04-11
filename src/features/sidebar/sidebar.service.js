import { findTrendingArticles } from '../article/article.repository.js';
import { findSuggestedUsers } from '../follow/follow.repository.js';
import { findAllTags } from '../tag/tag.repository.js';

export const getSidebarContent = async (currentId) => {
  const [articles, tags, followings] = await Promise.all([
    findTrendingArticles(3),
    findAllTags(10),
    findSuggestedUsers(currentId, 5),
  ]);

  const recommendedArticles = articles.map(
    ({
      content,
      status,
      authorId,
      totalLikes,
      totalComments,
      readingTime,
      viewCount,
      updatedAt,
      ...rest
    }) => rest
  );

  const popularTags = tags.map(
    ({ description, totalArticles, ...rest }) => rest
  );

  const suggestedUsers = followings.map(({ ...rest }) => rest);

  return {
    recommendedArticles,
    popularTags,
    suggestedUsers,
  };
};
