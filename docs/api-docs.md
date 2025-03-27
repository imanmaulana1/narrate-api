# Narrate API

### Auth

| Method | Path          | Description                    | Protected | Status  |
| ------ | ------------- | ------------------------------ | --------- | ------- |
| GET    | /auth/webhook | Handle Clerk user sync webhook | ❌        | ✅ Done |
| GET    | /auth/me      | Get current user profile       | ✅        | 📋 WIP  |

### Users

| Method | Path                         | Description                   | Protected | Status |
| ------ | ---------------------------- | ----------------------------- | --------- | ------ |
| GET    | /users/:username             | Get user public profile       | ❌        | 📋 WIP |
| GET    | /users/:username/articles    | Get user's published articles | ❌        | 📋 WIP |
| GET    | /users/:username/collections | Get user's public collections | ❌        | 📋 WIP |

### Articles

| Method | Path                         | Description                 | Protected | Status |
| ------ | ---------------------------- | --------------------------- | --------- | ------ |
| POST   | /articles                    | Create new draft article    | ✅        | 📋 WIP |
| GET    | /articles                    | List published articles     | ❌        | 📋 WIP |
| GET    | /articles/:slug              | Get article by slug         | ❌        | 📋 WIP |
| PUT    | /articles/:articleId         | Update article content      | ✅        | 📋 WIP |
| DELETE | /articles/:articleId         | Delete article              | ✅        | 📋 WIP |
| POST   | /articles/:articleId/publish | Publish draft article       | ✅        | 📋 WIP |
| GET    | /me/articles                 | Get current user's articles | ✅        | 📋 WIP |

### Comments

| Method | Path                          | Description            | Protected | Status |
| ------ | ----------------------------- | ---------------------- | --------- | ------ |
| POST   | /articles/:articleId/comments | Add comment to article | ✅        | 📋 WIP |
| GET    | /articles/:articleId/comments | Get article comments   | ❌        | 📋 WIP |
| POST   | /comments/:commentId/replies  | Reply to comment       | ✅        | 📋 WIP |
| GET    | /comments/:commentId/replies  | Get comment replies    | ❌        | 📋 WIP |
| PUT    | /comments/:commentId          | Update comment         | ✅        | 📋 WIP |
| DELETE | /comments/:commentId          | Delete comment         | ✅        | 📋 WIP |

### Likes

| Method | Path                          | Description                 | Protected | Status |
| ------ | ----------------------------- | --------------------------- | --------- | ------ |
| POST   | /articles/:articleId/likes    | Toggle like on article      | ✅        | 📋 WIP |
| GET    | /articles/:articleId/likes/me | Check if current user liked | ✅        | 📋 WIP |

### Collections

| Method | Path                       | Description            | Protected | Status |
| ------ | -------------------------- | ---------------------- | --------- | ------ |
| POST   | /collections               | Create new collection  | ✅        | 📋 WIP |
| GET    | /collections               | Get user's collections | ✅        | 📋 WIP |
| GET    | /collections/:collectionId | Get collection details | ✅        | 📋 WIP |
| PUT    | /collections/:collectionId | Update collection      | ✅        | 📋 WIP |
| DELETE | /collections/:collectionId | Delete collection      | ✅        | 📋 WIP |

### Bookmarks

| Method | Path                                            | Description               | Protected | Status |
| ------ | ----------------------------------------------- | ------------------------- | --------- | ------ |
| POST   | /collections/:collectionId/bookmarks            | Add article to collection | ✅        | 📋 WIP |
| DELETE | /collections/:collectionId/bookmarks/:articleId | Remove bookmark           | ✅        | 📋 WIP |
| GET    | /collections/:collectionId/bookmarks            | Get collection bookmarks  | ✅        | 📋 WIP |

### Follows

| Method | Path                     | Description             | Protected | Status |
| ------ | ------------------------ | ----------------------- | --------- | ------ |
| POST   | /users/:userId/follow    | Toggle follow user      | ✅        | 📋 WIP |
| GET    | /users/:userId/followers | Get user followers list | ❌        | 📋 WIP |
| GET    | /users/:userId/following | Get user following list | ❌        | 📋 WIP |

### Tags

| Method | Path                 | Description          | Protected | Status  |
| ------ | -------------------- | -------------------- | --------- | ------- |
| GET    | /tags                | List all tags        | ❌        | ✅ Done |
| GET    | /tags/:slug          | Get tags details     | ❌        | 📋 WIP  |
| GET    | /tags/:slug/articles | Get articles by tags | ❌        | 📋 WIP  |

### Notifications

| Method | Path                                | Description               | Protected | Status |
| ------ | ----------------------------------- | ------------------------- | --------- | ------ |
| GET    | /notifications                      | Get user notifications    | ✅        | 📋 WIP |
| PATCH  | /notifications/:notificationId/read | Mark notification as read | ✅        | 📋 WIP |
| DELETE | /notifications/:notificationId      | Delete notification       | ✅        | 📋 WIP |

### Upload

| Method | Path          | Description                     | Protected | Status |
| ------ | ------------- | ------------------------------- | --------- | ------ |
| POST   | /upload/image | Get Cloudinary upload signature | ✅        | 📋 WIP |
