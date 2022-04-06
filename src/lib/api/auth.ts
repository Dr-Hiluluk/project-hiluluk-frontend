import client from "./client";
client.initHttp();
class AuthApi {
  static login = ({ email, password }: { email: string; password: string }) =>
    client.post("/api/auth/login", { email, password });

  static register = ({
    email,
    password,
    name,
    nickname,
  }: {
    email: string;
    password: string;
    name: string;
    nickname: string;
  }) => client.post("/api/auth/register", { email, password, name, nickname });
}

export { AuthApi };
