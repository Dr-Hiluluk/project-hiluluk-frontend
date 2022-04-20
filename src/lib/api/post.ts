import client from "./client";
client.initHttp();
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
}

export default PostApi;
