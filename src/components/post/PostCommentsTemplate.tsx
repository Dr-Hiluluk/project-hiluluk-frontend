import React from "react";

export interface PostCommentsTemplateProps {
  count: number;
}

const PostCommentsTemplate: React.FC<PostCommentsTemplateProps> = ({
  children,
  count = 0,
}) => {
  return (
    <div className="post-comments_template-block">
      <span>{count}개의 댓글</span>
      <div>{children}</div>
    </div>
  );
};

export default PostCommentsTemplate;
