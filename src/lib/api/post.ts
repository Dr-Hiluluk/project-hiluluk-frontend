import client from "./client";
import qs from "qs";
class PostApi {
  static createPost = ({
    title,
    body,
    tags,
    thumbnail,
  }: {
    title: string;
    body: string;
    tags: string[];
    thumbnail?: string;
  }) => client.post("/api/post", { title, body, tags, thumbnail });

  static readPost = ({ id }: any) => {
    return client.get(`/api/post/${id}`);
  };

  static readPostList = ({
    page,
    nickname,
    tag,
  }: {
    page: string;
    nickname: string;
    tag: string;
  }) => {
    const queryString = qs.stringify({
      page,
      nickname,
      tag,
    });
    return client.get(`/api/post?${queryString}`);
  };

  static searchPostList = ({ page, word }: { page: number; word: string }) => {
    const queryString = qs.stringify({ page, word });
    return client.get(`api/post/search?${queryString}`);
  };

  static updatePost = ({
    postId,
    title,
    body,
    tags,
    thumbnail,
  }: {
    postId: number;
    title: string;
    body: string;
    tags: string[];
    thumbnail?: string;
  }) =>
    client.patch(`/api/post/${postId}`, {
      title,
      body,
      tags,
      thumbnail,
    });

  static deletePost = ({ postId }: { postId: number }) =>
    client.delete(`/api/post/${postId}`);
}

export default PostApi;
