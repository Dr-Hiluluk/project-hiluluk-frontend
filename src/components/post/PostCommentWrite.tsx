import React from "react";
import { Button } from "../common/Button/Button";

interface PostCommentWriteProps {
  add: boolean;
  edit: boolean;
  comment: string;
  onCreate: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAddToggle?: () => any;
  onEditToggle?: () => any;
}

const PostCommentWrite: React.FC<PostCommentWriteProps> = ({
  add,
  edit,
  comment,
  onChange,
  onCreate,
  onAddToggle,
  onEditToggle,
}) => {
  return (
    <div className="post-comment-write_block">
      <textarea
        value={comment}
        className="post-comments_textarea"
        placeholder="댓글을 입력하세요."
        onChange={onChange}
      />
      <div className="post-comments_button-wrapper">
        {add && onAddToggle && <span onClick={onAddToggle}>취소</span>}
        {edit && onEditToggle && <span onClick={onEditToggle}>취소</span>}
        <Button onClick={() => onCreate()}>
          댓글 {edit ? "수정" : "작성"}
        </Button>
      </div>
    </div>
  );
};

export default PostCommentWrite;
