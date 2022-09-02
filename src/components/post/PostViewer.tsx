import React from "react";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import "./PostViewer.scss";
import { IoCaretUpOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { categoryIndex } from "../user/UserProfile";

const PostViewer = ({ post, error, loading, actionButtons }: any) => {
  // if (error) {
  //   if (error.response && error.response.status === 404) {
  //     return (
  //       <div className="post-viewer-block">존재하지 않는 포스트입니다.</div>
  //     );
  //   } else {
  //     return <div className="post-viewer-block">오류 발생!</div>;
  //   }
  // }
  if (loading || !post) {
    return null;
  }

  const { title, body, user, createdAt, tags, categoryId } = post;

  return (
    <div className="post-viewer-block">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="post-head-wrapper">
        <div className="post-head-wrapper_nav">
          <h2>{categoryIndex[categoryId].label}</h2>
          {post?.is_temp && <h2 className="temp">임시 글</h2>}
        </div>
        <h1>{title}</h1>
        <SubInfo nickname={user.nickname} createdAt={createdAt} />
        {actionButtons}
        <div className="post-tag-container">
          {tags.length > 0 && <Tags tags={tags} />}
        </div>
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
