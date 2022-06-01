import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button/Button";
import SubInfo from "../common/SubInfo";
import "./PostList.scss";

const PostItem = ({ post }: any) => {
  return (
    <div className="post-item_block">
      <div className="post-item_block-body">
        <div className="post-item_block-head">
          <Link to={`/@${post.user.nickname}/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>

        <p>{post.body}</p>
      </div>

      <div className="post-item_block-tail">
        <div className="post-item_block-tail-userInfo">
          <SubInfo
            nickname={post.user.nickname}
            createdAt={new Date(post.createdAt)}
          />
        </div>
      </div>
    </div>
  );
};

const PostList = ({ postList, postListError, loading, isUser }: any) => {
  if (postListError) {
    return <div className="post-list_block">게시글을 불러오지 못했습니다.</div>;
  }
  return (
    <div className="post-list_block">
      {!loading && postList && (
        <div className="post-item_area">
          {postList.map((post: any) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
