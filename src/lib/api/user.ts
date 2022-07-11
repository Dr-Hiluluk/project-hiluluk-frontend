import client from "./client";
import qs from "qs";

class UserApi {
  static getUserProfile({ nickname }: { nickname: string }) {
    return client.get(`/api/user/${nickname}`);
  }

  static updateUserProfile({
    userId,
    description,
    thumbnail,
    password,
  }: {
    userId: number;
    description: string | undefined;
    thumbnail: string | undefined;
    password: string | undefined;
  }) {
    const queryString = qs.stringify({
      userId,
      description,
      thumbnail,
      password,
    });
    return client.patch(`/api/user?${queryString}`);
  }

  static deleteUser({ userId }: { userId: number }) {
    return client.delete(`/api/user/${userId}`);
  }
}

export default UserApi;
