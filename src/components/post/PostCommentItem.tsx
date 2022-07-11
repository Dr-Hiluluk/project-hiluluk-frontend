import React, { memo } from "react";
import useBooleanToggle from "../../lib/hooks/useBooleanToggle";
import { formatDate } from "../../lib/utils";
import { defaultThumbnail } from "../../static/svg";
import { comment } from "./PostCommentList";
import PostReplies from "./PostReplies";
import PostReplyWriteContainer from "../../containers/write/PostReplyWriteContainer";
import PostCommentEdit from "./PostCommentEdit";
import ReplyToggler from "../comment/ReplyToggler";
import { Link } from "react-router-dom";

interface PostCommentItemProps {
  comment: comment;
  parent?: comment;
  replies?: comment[];
  ownComment: boolean;
  onDelete: (id: number) => void;
}

const PostCommentItem: React.FC<PostCommentItemProps> = memo(
  ({ comment, parent, replies, ownComment, onDelete }) => {
    const [open, onOpenToggle] = useBooleanToggle(false);
    const [add, onAddToggle] = useBooleanToggle(false);
    const [edit, onEditToggle] = useBooleanToggle(false);
    return (
      <div
        className={`post-comment-item_block ${comment.parentId ? "child" : ""}`}
      >
        <div className="post-comment_user-info">
          <div className="post-comment_profile">
            <Link
              className="thumbnail"
              to={comment.user ? `/@${comment.user.nickname}` : ""}
            >
              <img
                src={comment.user?.thumbnail || defaultThumbnail}
                alt={`user thumbnail of ${comment.user?.nickname}`}
              />
            </Link>
            <div className="post-comment_comment-info">
              <Link to={comment.user ? `/@${comment.user.nickname}` : ""}>
                <span className="post-comment_nickname">
                  {comment.user ? comment.user.nickname : "탈퇴한 유저"}
                </span>
              </Link>
              <span className="post-comment_updatedAt">
                {comment.createdAt === comment.updatedAt
                  ? formatDate(comment.updatedAt)
                  : `${formatDate(comment.updatedAt)}(수정됨)`}
              </span>
            </div>
          </div>
          {ownComment && !comment.isDeleted && (
            <div className="post-comment_actions">
              <span
                onClick={() => {
                  onEditToggle();
                }}
                className="post-comment_update"
              >
                수정
              </span>
              <span
                onClick={() => onDelete(comment.id)}
                className="post-comment_delete"
              >
                삭제
              </span>
            </div>
          )}
        </div>
        {edit ? (
          <PostCommentEdit
            edit={edit}
            id={comment.id}
            defaultText={comment.content}
            onEditToggle={onEditToggle}
          />
        ) : (
          <div className="post-comment_content">
            {parent && parent.userId && `@${parent.user?.nickname} `}
            {comment.content}
          </div>
        )}

        <div className="toggler-container">
          {!comment.parentId && comment.count > 0 && (
            <ReplyToggler
              count={comment.count}
              open={open}
              onToggle={onOpenToggle}
            />
          )}
          <span className="toggler-container_add-toggle" onClick={onAddToggle}>
            {add || !comment.user || "댓글 작성"}
          </span>
        </div>

        {add && (
          <PostReplyWriteContainer
            parentId={comment.id}
            add={add}
            onAddToggle={onAddToggle}
          />
        )}

        {open && replies && (
          <PostReplies
            Ancestor={comment}
            comments={replies}
            onDelete={onDelete}
          />
        )}
      </div>
    );
  },
);

export default PostCommentItem;
