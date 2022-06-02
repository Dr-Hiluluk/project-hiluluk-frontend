import React, { memo } from "react";
import PostCommentItem from "./PostCommentItem";

export interface comment {
  id: number;
  user: {
    id: number;
    nickname: string;
    thumbnail: string;
  };
  content: string;
  userId: number;
  parentId?: number | null;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
  children?: comment[];
  path: number[];
  isDeleted: boolean;
  count: number;
}

interface PostCommentListProps {
  userId: number | null;
  comments: comment[];
  onDelete: (id: number) => void;
}

const PostCommentList: React.FC<PostCommentListProps> = memo(
  ({ userId, comments, onDelete }) => {
    let parents: any[] = [],
      replies: any[] = [];
    comments.forEach((comment: any) =>
      comment.parentId ? replies.push(comment) : parents.push(comment),
    );
    return (
      <div>
        {parents.map((comment: comment) => {
          const commentReplies = replies.filter(
            (reply: any) => reply.path[0] === comment.id,
          );
          return (
            <PostCommentItem
              key={comment.id}
              comment={comment}
              replies={commentReplies}
              onDelete={onDelete}
              ownComment={userId === comment.userId}
            />
          );
        })}
      </div>
    );
  },
);

export default PostCommentList;
