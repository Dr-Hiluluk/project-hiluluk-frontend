import client from "./client";
import qs from "qs";
class PostApi {
  static createPost = ({
    categoryId,
    title,
    body,
    tags,
    thumbnail,
  }: {
    categoryId: number;
    title: string;
    body: string;
    tags: string[];
    thumbnail?: string;
  }) => client.post("/api/post", { categoryId, title, body, tags, thumbnail });

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
    categoryId,
    postId,
    title,
    body,
    tags,
    thumbnail,
  }: {
    categoryId: number;
    postId: number;
    title: string;
    body: string;
    tags: string[];
    thumbnail?: string;
  }) =>
    client.patch(`/api/post/${postId}`, {
      categoryId,
      title,
      body,
      tags,
      thumbnail,
    });

  static deletePost = ({ postId }: { postId: number }) =>
    client.delete(`/api/post/${postId}`);
}

export default PostApi;
