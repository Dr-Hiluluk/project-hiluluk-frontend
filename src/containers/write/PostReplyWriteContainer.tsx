import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../lib/hooks/useInput";
import { createComment } from "../../modules/comment";
import PostCommentWrite from "../../components/post/PostCommentWrite";
import useUser from "../../lib/hooks/useUser";
import { ReducerType } from "../../modules";

interface PostReplyWriteContainerProps {
  parentId: number;
  add: boolean;
  onAddToggle: () => any;
}

const PostReplyWriteContainer: React.FC<PostReplyWriteContainerProps> = ({
  parentId,
  add,
  onAddToggle,
}) => {
  const [comment, onChange] = useInput("");
  const user = useUser();
  const { post } = useSelector(({ post }: ReducerType) => ({
    post: post.read,
  }));
  const dispatch = useDispatch();
  const onCreate = () => {
    dispatch(createComment(user.id, post.id, parentId, comment));
    onAddToggle();
  };

  return (
    <PostCommentWrite
      edit={false}
      onCreate={onCreate}
      onChange={onChange}
      add={add}
      comment={comment}
      onAddToggle={onAddToggle}
    />
  );
};

export default PostReplyWriteContainer;
