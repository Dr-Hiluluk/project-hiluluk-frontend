import React from "react";
import useUser from "../../lib/hooks/useUser";
import PostCommentList from "./PostCommentList";

interface PostRepliesProps {
  parents: any[];
  comments: any;
  onDelete: (id: number) => void;
  onToggleChildren: (id: number) => void;
}

const PostReplies: React.FC<PostRepliesProps> = ({
  comments,
  parents,
  onDelete,
  onToggleChildren,
}) => {
  const user = useUser();
  return (
    <PostCommentList
      userId={user.id}
      comments={comments}
      parents={parents}
      onDelete={onDelete}
      onToggleChildren={onToggleChildren}
    />
  );
};

export default PostReplies;
