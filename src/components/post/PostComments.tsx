import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PostCommentWriteContainer from "../../containers/write/PostCommentWriteContainer";
import useBooleanToggle from "../../lib/hooks/useBooleanToggle";
import useUser from "../../lib/hooks/useUser";
import { deleteComment, readChildCommentList } from "../../modules/comment";
import AskModal from "../common/AskModal/AskModal";
import PostCommentList from "./PostCommentList";
import "./PostComments.scss";
import PostCommentsTemplate from "./PostCommentsTemplate";

export interface PostCommentsProps {
  postId: number;
  comments: any;
  count: number;
  loading: boolean;
}

const PostComments: React.FC<PostCommentsProps> = ({
  loading,
  postId,
  comments,
  count,
}) => {
  const [deleteId, setDeleteId] = useState(-1);
  const [askRemove, onToggleAskRemove] = useBooleanToggle(false);

  const dispatch = useDispatch();
  const user = useUser();
  const onToggleChildren = useCallback(
    (id: number) => {
      dispatch(readChildCommentList(id));
    },
    [dispatch],
  );

  const onDelete = useCallback(
    (id: number) => {
      setDeleteId(id);
      onToggleAskRemove();
    },
    [onToggleAskRemove],
  );

  const onConfirmDeleteComment = useCallback(() => {
    dispatch(deleteComment(deleteId));
    onToggleAskRemove();
  }, [deleteId, dispatch, onToggleAskRemove]);

  const onCancelModal = () => {
    onToggleAskRemove();
  };

  if (loading) {
    return null;
  }

  return (
    <div className="post-comments_block">
      <PostCommentsTemplate count={count}>
        <PostCommentWriteContainer postId={postId} add={false} edit={false} />
      </PostCommentsTemplate>
      {comments && (
        <PostCommentList
          userId={user && user.id}
          onDelete={onDelete}
          comments={comments}
          onToggleChildren={onToggleChildren}
        />
      )}
      {askRemove && (
        <AskModal
          title="댓글 삭제"
          description="정말 삭제하시겠습니까?"
          visible={askRemove}
          onCancel={onCancelModal}
          onConfirm={() => onConfirmDeleteComment()}
        />
      )}
    </div>
  );
};

export default PostComments;
