import React from "react";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import "../post/PostViewer.scss";
import { IoCaretUpOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

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
  console.log("postViewerLoading:", loading);
  const { title, body, user, createdAt, tags } = post;

  return (
    <div className="post-viewer-block">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="post-head-wrapper">
        <h1>{title}</h1>
        <SubInfo nickname={user.nickname} createdAt={createdAt} />
        <div className="post-tag-container">
          <Tags tags={tags} />
        </div>
        {actionButtons}
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div className="post-scrolltotop">
        <div className="post-scrolltotop-icon">
          <IoCaretUpOutline />
          <div className="post-scrolltotop-icon_active">
            <IoCaretUpOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostViewer;
