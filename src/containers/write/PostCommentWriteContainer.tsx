import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AskModal from "../../components/common/AskModal/AskModal";
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
  const navigation = useNavigate();
  const user = useUser();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const onCreateComment = () => {
    if (!user) {
      setModal(true);
    } else {
      dispatch(createComment(user.id, Number(postId), null, comment));
    }
    onReset();
  };

  return (
    <>
      <PostCommentWrite
        edit={edit}
        onChange={onChange}
        onCreate={() => onCreateComment()}
        add={add}
        comment={comment}
      />
      {modal && (
        <AskModal
          title="로그인"
          visible={true}
          description="로그인이 필요한 서비스입니다."
          confirmText="로그인"
          onCancel={() => setModal(false)}
          onConfirm={() => navigation("/login", { state: location.pathname })}
        />
      )}
    </>
  );
};

export default PostCommentWriteContainer;
