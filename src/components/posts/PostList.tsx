import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button/Button";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import "./PostList.scss";

const PostItem = ({ post }: any) => {
  return (
    <div className="post-item_block">
      <Link to={`/@${post.user.nickname}/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <SubInfo
        nickname={post.user.nickname}
        createdAt={new Date(post.createdAt)}
      />
      <Tags tags={post.tags} />
      <p>{post.body}</p>
    </div>
  );
};

const PostList = ({ postList, postListError, loading, isUser }: any) => {
  if (postListError) {
    return <div className="post-list_block">게시글을 불러오지 못했습니다.</div>;
  }
  return (
    <div className="post-list_block">
      <div className="post-list_write-button-wrapper">
        {isUser.nickname && (
          <Button cyan="cyan" to="/write">
            새 글 작성하기
          </Button>
        )}
      </div>

      {!loading && postList && (
        <div>
          {postList.map((post: any) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
