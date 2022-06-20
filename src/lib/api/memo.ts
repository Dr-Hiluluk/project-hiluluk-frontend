import client from "./client";
import qs from "qs";

class MemoApi {
  static createMemo({
    userId,
    content,
    refDate,
  }: {
    userId: number;
    content: string;
    refDate: string;
  }) {
    return client.post("/api/memo", { userId, content, refDate });
  }
  static async readMemoList({
    nickname,
    yearMonth,
  }: {
    nickname: number;
    yearMonth: string;
  }) {
    const queryString = qs.stringify({ nickname, yearMonth });
    return client.get(`/api/memo?${queryString}`);
  }
  static async updateMemo({
    memoId,
    content,
  }: {
    memoId: number;
    content: string;
  }) {
    const queryString = qs.stringify({ memoId, content });
    return client.patch(`/api/memo?${queryString}`);
  }
  static async removeMemo({ memoId }: { memoId: number }) {
    return client.delete(`/api/memo/${memoId}`);
  }
}

export default MemoApi;
