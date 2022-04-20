import React from "react";
import "../post/PostViewer.scss";

const PostViewer = ({ post, error, loading }: any) => {
  if (error) {
    console.log(error);
  }
  if (loading || !post) {
    return null;
  }

  const { title, body, user, createdAt, tags } = post;
  console.log(post);
  return (
    <div className="post-viewer-block">
      <div className="post-head">
        <h1>{title}</h1>
        <div className="sub-info">
          <span>
            <b>{user.nickname}</b>
          </span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <div className="tags">
          {tags.map((tag: any, index: number) => (
            <div className="tag" key={index}>
              #{tag.content}
            </div>
          ))}
        </div>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default PostViewer;
