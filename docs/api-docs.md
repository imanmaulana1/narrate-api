# Narrate API

### Auth

| Method | Path          | Description                    | Protected |
| ------ | ------------- | ------------------------------ | --------- |
| GET    | /auth/webhook | Handle Clerk user sync webhook | ❌        |
| GET    | /auth/me      | Get current user profile       | ✅        |

### Users

| Method | Path                         | Description                   | Protected |
| ------ | ---------------------------- | ----------------------------- | --------- |
| GET    | /users/:username             | Get user public profile       | ❌        |
| GET    | /users/:username/articles    | Get user's published articles | ❌        |
| GET    | /users/:username/collections | Get user's public collections | ❌        |

### Articles

| Method | Path                         | Description                 | Protected |
| ------ | ---------------------------- | --------------------------- | --------- |
| POST   | /articles                    | Create new draft article    | ✅        |
| GET    | /articles                    | List published articles     | ❌        |
| GET    | /articles/:slug              | Get article by slug         | ❌        |
| PUT    | /articles/:articleId         | Update article content      | ✅        |
| DELETE | /articles/:articleId         | Delete article              | ✅        |
| POST   | /articles/:articleId/publish | Publish draft article       | ✅        |
| GET    | /me/articles                 | Get current user's articles | ✅        |

### Comments

| Method | Path                          | Description            | Protected |
| ------ | ----------------------------- | ---------------------- | --------- |
| POST   | /articles/:articleId/comments | Add comment to article | ✅        |
| GET    | /articles/:articleId/comments | Get article comments   | ❌        |
| POST   | /comments/:commentId/replies  | Reply to comment       | ✅        |
| GET    | /comments/:commentId/replies  | Get comment replies    | ❌        |
| PUT    | /comments/:commentId          | Update comment         | ✅        |
| DELETE | /comments/:commentId          | Delete comment         | ✅        |

### Likes

| Method | Path                          | Description                 | Protected |
| ------ | ----------------------------- | --------------------------- | --------- |
| POST   | /articles/:articleId/likes    | Toggle like on article      | ✅        |
| GET    | /articles/:articleId/likes/me | Check if current user liked | ✅        |

### Collections

| Method | Path                       | Description            | Protected |
| ------ | -------------------------- | ---------------------- | --------- |
| POST   | /collections               | Create new collection  | ✅        |
| GET    | /collections               | Get user's collections | ✅        |
| GET    | /collections/:collectionId | Get collection details | ✅        |
| PUT    | /collections/:collectionId | Update collection      | ✅        |
| DELETE | /collections/:collectionId | Delete collection      | ✅        |

### Bookmarks

| Method | Path                                            | Description               | Protected |
| ------ | ----------------------------------------------- | ------------------------- | --------- |
| POST   | /collections/:collectionId/bookmarks            | Add article to collection | ✅        |
| DELETE | /collections/:collectionId/bookmarks/:articleId | Remove bookmark           | ✅        |
| GET    | /collections/:collectionId/bookmarks            | Get collection bookmarks  | ✅        |

### Follows

| Method | Path                     | Description             | Protected |
| ------ | ------------------------ | ----------------------- | --------- |
| POST   | /users/:userId/follow    | Toggle follow user      | ✅        |
| GET    | /users/:userId/followers | Get user followers list | ❌        |
| GET    | /users/:userId/following | Get user following list | ❌        |

### Categories

| Method | Path                       | Description              | Protected |
| ------ | -------------------------- | ------------------------ | --------- |
| GET    | /categories                | List all categories      | ❌        |
| GET    | /categories/:slug          | Get category details     | ❌        |
| GET    | /categories/:slug/articles | Get articles by category | ❌        |

### Notifications

| Method | Path                                | Description               | Protected |
| ------ | ----------------------------------- | ------------------------- | --------- |
| GET    | /notifications                      | Get user notifications    | ✅        |
| PATCH  | /notifications/:notificationId/read | Mark notification as read | ✅        |
| DELETE | /notifications/:notificationId      | Delete notification       | ✅        |

### Upload

| Method | Path          | Description                     | Protected |
| ------ | ------------- | ------------------------------- | --------- |
| POST   | /upload/image | Get Cloudinary upload signature | ✅        |
