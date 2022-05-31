import React, { memo, useCallback } from "react";
import useBooleanToggle from "../../lib/hooks/useBooleanToggle";
import { formatDate } from "../../lib/utils";
import { defaultThumbnail } from "../../static/svg";
import { comment } from "./PostCommentList";
import PostReplies from "./PostReplies";
import PostReplyWriteContainer from "../../containers/write/PostReplyWriteContainer";
import PostCommentEdit from "./PostCommentEdit";
import ReplyToggler from "../comment/ReplyToggler";

interface PostCommentItemProps {
  comment: comment;
  parent?: comment;
  ownComment: boolean;
  onDelete: (id: number) => void;
  onToggleChildren: (id: number) => void;
}

const PostCommentItem: React.FC<PostCommentItemProps> = memo(
  ({ comment, parent, ownComment, onDelete, onToggleChildren }) => {
    const [open, onOpenToggle] = useBooleanToggle(false);
    const [add, onAddToggle] = useBooleanToggle(false);
    const [edit, onEditToggle] = useBooleanToggle(false);

    const onToggle = useCallback(() => {
      onToggleChildren(comment.id);
      onOpenToggle();
    }, [comment.id, onOpenToggle, onToggleChildren]);

    return (
      <div
        className={`post-comment-item_block ${comment.parentId ? "child" : ""}`}
      >
        <div className="post-comment_user-info">
          <div className="post-comment_profile">
            <img
              className="post-comment_thumbnail"
              src={defaultThumbnail}
              alt="user-thumbnail"
            />
            <div className="post-comment_comment-info">
              <span className="post-comment_nickname">
                {comment.user.nickname}
              </span>
              <span className="post-comment_updatedAt">
                {formatDate(comment.updatedAt)}
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
            {parent && `@${parent.user.nickname} `}
            {comment.content}
          </div>
        )}

        <div className="toggler-container">
          {!comment.parentId && comment.count > 0 && (
            <ReplyToggler
              count={comment.count}
              open={open}
              onToggle={onToggle}
            />
          )}
          <span className="toggler-container_add-toggle" onClick={onAddToggle}>
            {add || "댓글 작성"}
          </span>
        </div>

        {add && (
          <PostReplyWriteContainer
            parentId={comment.id}
            add={add}
            onAddToggle={onAddToggle}
          />
        )}

        {open && comment && comment.children && (
          <PostReplies
            onToggleChildren={() => onToggleChildren(comment.id)}
            parents={[comment, ...comment.children]}
            comments={comment.children}
            onDelete={onDelete}
          />
        )}
      </div>
    );
  },
);

export default PostCommentItem;
