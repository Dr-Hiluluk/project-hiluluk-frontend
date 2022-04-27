import client from "./client";
import qs from "qs";
class PostApi {
  static createPost = ({
    title,
    body,
    tags,
  }: {
    title: string;
    body: string;
    tags: string[];
  }) => client.post("/api/post", { title, body, tags });

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

  static updatePost = ({
    postId,
    title,
    body,
    tags,
  }: {
    postId: number;
    title: string;
    body: string;
    tags: string[];
  }) =>
    client.patch(`/api/post/${postId}`, {
      title,
      body,
      tags,
    });
}

export default PostApi;
