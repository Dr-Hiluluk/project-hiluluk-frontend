import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../lib/hooks/useInput";
import { updateComment } from "../../modules/comment";
import PostCommentWrite from "./PostCommentWrite";

interface PostCommentEditProps {
  id: number;
  edit: boolean;
  defaultText: string;
  onEditToggle: () => void;
}

const PostCommentEdit: React.FC<PostCommentEditProps> = ({
  id,
  edit,
  defaultText,
  onEditToggle,
}) => {
  const [comment, onChange] = useInput(defaultText);
  const dispatch = useDispatch();
  const onEdit = useCallback(() => {
    dispatch(updateComment(id, comment));
    onEditToggle();
  }, [dispatch, id, comment, onEditToggle]);
  return (
    <PostCommentWrite
      add={false}
      onEditToggle={onEditToggle}
      onChange={onChange}
      comment={comment}
      onCreate={onEdit}
      edit={edit}
    />
  );
};

export default PostCommentEdit;
