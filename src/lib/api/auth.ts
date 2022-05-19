import client from "./client";
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

  static check = () => client.get("/api/auth/check");

  static logout = () => client.post("/api/auth/logout");
}

export { AuthApi };
