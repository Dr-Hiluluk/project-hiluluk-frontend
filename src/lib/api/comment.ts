import client from "./client";

class CommentApi {
  static readCommentList({ postId }: { postId: number }) {
    return client.get(`/api/comment?postId=${postId}`);
  }

  static readChildCommentList({ commentId }: { commentId: number }) {
    return client.get(`/api/comment/${commentId}`);
  }

  static createComment({
    userId,
    postId,
    parentId = null,
    content,
  }: {
    userId: number;
    postId: number;
    parentId: number | null;
    content: string;
  }) {
    return client.post("/api/comment", { userId, postId, parentId, content });
  }

  static deleteComment({ commentId }: { commentId: number }) {
    return client.delete(`/api/comment/${commentId}`);
  }

  static updateComment({
    commentId,
    content,
  }: {
    commentId: number;
    content: string;
  }) {
    return client.patch("/api/comment", { commentId, content });
  }
}

export default CommentApi;
