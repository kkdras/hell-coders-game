import { Dispatch, SetStateAction } from "react";

export interface AddReplyForm {
  text: string
}

export interface AddReplyProps {
  showAddReply: boolean,
  setShowAddReply: Dispatch<SetStateAction<boolean>>,
  commentId: string,
  authorLogin: string,
}
