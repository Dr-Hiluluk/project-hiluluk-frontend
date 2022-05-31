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
      <h4>{count}개의 댓글</h4>
      <div>{children}</div>
    </div>
  );
};

export default PostCommentsTemplate;
