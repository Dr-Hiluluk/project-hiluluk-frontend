import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../lib/hooks/useInput";
import { createComment } from "../../modules/comment";
import PostCommentWrite from "../../components/post/PostCommentWrite";
import useUser from "../../lib/hooks/useUser";
import { ReducerType } from "../../modules";
import { useLocation, useNavigate } from "react-router-dom";
import AskModal from "../../components/common/AskModal/AskModal";

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
  const [modal, setModal] = useState(false);
  const user = useUser();
  const { post } = useSelector(({ post }: ReducerType) => ({
    post: post.read,
  }));
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const onCreate = () => {
    if (!user) {
      setModal(true);
    } else {
      dispatch(createComment(user.id, post.id, parentId, comment));
      onAddToggle();
    }
  };

  return (
    <>
      <PostCommentWrite
        edit={false}
        onCreate={onCreate}
        onChange={onChange}
        add={add}
        comment={comment}
        onAddToggle={onAddToggle}
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

export default PostReplyWriteContainer;
