import React from "react";
import { Link } from "react-router-dom";
import { RatioImage } from "../common/RatioImage";
import "./PostList.scss";
import { formatDate } from "../../lib/utils";
import { defaultThumbnail } from "../../static/svg";

const PostItem = ({ post }: any) => {
  return (
    <div className="post-item_block">
      {post.thumbnail && (
        <Link className="styled-link" to={`/@${post.user.nickname}/${post.id}`}>
          <RatioImage src={post.thumbnail} widthRatio={1.916} heightRatio={1} />
        </Link>
      )}
      <div className="post-item_content">
        <span className="post-item_category-name">Category Name</span>
        <Link className="styled-link" to={`/@${post.user.nickname}/${post.id}`}>
          <h4>{post.title}</h4>
          <div className="post-item_description">
            <p>{post.body}</p>
          </div>
        </Link>
        <div className="post-item_sub-info">
          <span>{formatDate(post.createdAt)}</span>
          <span className="separator">·</span>
          <span>{post.comments_count}개의 댓글</span>
        </div>
      </div>
      <footer className="post-item_footer">
        <Link className="user-info" to={`/@${post.user.nickname}`}>
          <img
            src={post.user.thumbnail || defaultThumbnail}
            alt={`user thumbnail of ${post.user.nickname}`}
          />
          <span>
            <b>{post.user.nickname}</b>
          </span>
        </Link>
      </footer>
    </div>
  );
};

const PostList = ({ postList, postListError, loading, isUser }: any) => {
  if (postListError) {
    return <div className="post-list_block">게시글을 불러오지 못했습니다.</div>;
  }

  return (
    <div className="post-list_block">
      {!loading &&
        postList &&
        postList.map((post: any) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};

export default PostList;
