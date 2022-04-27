import React from "react";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import "../post/PostViewer.scss";

const PostViewer = ({ post, error, loading, actionButtons }: any) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <div className="post-viewer-block">존재하지 않는 포스트입니다.</div>
      );
    } else {
      return <div className="post-viewer-block">오류 발생!</div>;
    }
  }
  if (loading || !post) {
    return null;
  }

  const { title, body, user, createdAt, tags } = post;

  return (
    <div className="post-viewer-block">
      <div className="post-head">
        <h1>{title}</h1>
        <SubInfo
          nickname={user.nickname}
          createdAt={createdAt}
          marginTop={"margin-top"}
        />
        <Tags tags={tags} />
        {actionButtons}
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default PostViewer;
