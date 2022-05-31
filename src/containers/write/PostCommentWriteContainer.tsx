import React from "react";
import { useDispatch } from "react-redux";
import PostCommentWrite from "../../components/post/PostCommentWrite";
import useInput from "../../lib/hooks/useInput";
import useUser from "../../lib/hooks/useUser";
import { createComment } from "../../modules/comment";

interface PostCommentWriteProps {
  add: boolean;
  edit: boolean;
  postId: number;
}

const PostCommentWriteContainer: React.FC<PostCommentWriteProps> = ({
  add,
  edit,
  postId,
}) => {
  const [comment, onChange, onReset] = useInput("");
  const dispatch = useDispatch();
  const user = useUser();

  const onCreateComment = () => {
    dispatch(createComment(user.id, Number(postId), null, comment));
    onReset();
  };

  return (
    <PostCommentWrite
      edit={edit}
      onChange={onChange}
      onCreate={() => onCreateComment()}
      add={add}
      comment={comment}
    />
  );
};

export default PostCommentWriteContainer;
