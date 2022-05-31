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
  path: number[] | null;
  isDeleted: boolean;
  count: number;
}

interface PostCommentListProps {
  userId: number | null;
  parents?: any[];
  comments: comment[];
  onDelete: (id: number) => void;
  onToggleChildren: (id: number) => void;
}

const PostCommentList: React.FC<PostCommentListProps> = memo(
  ({ userId, comments, parents, onDelete, onToggleChildren }) => {
    return (
      <div>
        {comments.map((comment: comment) => {
          let parent =
            parents &&
            parents?.find((parent: any) => parent.id === comment.parentId);
          console.log(
            comment.content,
            userId === comment.userId,
            userId,
            comment.userId,
          );
          return (
            <PostCommentItem
              key={comment.id}
              comment={comment}
              parent={parent}
              onDelete={onDelete}
              onToggleChildren={onToggleChildren}
              ownComment={userId === comment.userId}
            />
          );
        })}
      </div>
    );
  },
);

export default PostCommentList;
