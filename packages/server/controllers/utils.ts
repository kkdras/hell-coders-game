import { pick } from 'ramda'
import { IComment, IReaction, ReactionType, WithId } from './types'

type CommentsWithReaction = (IComment & { Reactions: WithId<IReaction>[] })[]

export const transformComments = (
  rawComments: CommentsWithReaction,
  userId: number
) => {
  const comments = []

  for (const comment of rawComments) {
    const curUserReaction = comment.Reactions.find(
      ({ userId: reactionUserId }) => reactionUserId === userId
    )

    comments.push({
      ...pick(['commentId', 'userId', 'type', 'id'], comment),
      userReaction: !!curUserReaction,
      userReactionType: curUserReaction?.type ?? null,
      likes: comment.Reactions.reduce(
        (acc, item) => Number(item.type === ReactionType.LIKE) + acc,
        0
      ),
      dislikes: comment.Reactions.reduce(
        (acc, item) => Number(item.type === ReactionType.DISLIKE) + acc,
        0
      )
    })
  }

  return comments
}
