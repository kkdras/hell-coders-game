import { sequelize } from './init'
import { Topic } from './topic.model'
import { Comment } from './comment.model'
import { Reaction } from './reaction.model'
import { User } from './user.model'
import { Theme } from './theme.model'

Comment.belongsTo(Comment, { as: 'parent', foreignKey: 'parentId' })
Comment.hasMany(Comment, { as: 'replies', foreignKey: 'parentId' })
Comment.belongsTo(Topic, { as: 'main theme', foreignKey: 'topicId' })
Comment.belongsTo(User, { as: 'comment author', foreignKey: 'userId' })
Comment.hasMany(Reaction, { foreignKey: 'commentId' })

Reaction.belongsTo(Comment, {
  as: 'reaction on specific comment',
  foreignKey: 'commentId'
})
Reaction.belongsTo(User, { as: 'reaction author', foreignKey: 'userId' })

export { sequelize, Topic, Comment, Reaction, User, Theme }
