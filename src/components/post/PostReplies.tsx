import React from "react";
import useUser from "../../lib/hooks/useUser";
import PostCommentItem from "./PostCommentItem";
import { comment } from "./PostCommentList";

interface PostRepliesProps {
  Ancestor: comment;
  comments: comment[];
  onDelete: (id: number) => void;
}

const PostReplies: React.FC<PostRepliesProps> = ({
  comments,
  Ancestor,
  onDelete,
}) => {
  const user = useUser();
  return (
    <div>
      {comments.map((comment) => {
        const parent = comments.find((item) => item.id === comment.parentId);
        return (
          <PostCommentItem
            key={comment.id}
            comment={comment}
            parent={parent || Ancestor}
            onDelete={onDelete}
            ownComment={!!(user && user.id === comment.userId)}
          />
        );
      })}
    </div>
  );
};

export default PostReplies;
