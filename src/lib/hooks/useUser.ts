import { useSelector } from "react-redux";
import { ReducerType } from "../../modules";

function useUser() {
  const { user } = useSelector(({ user }: ReducerType) => ({
    user: user.user,
  }));
  return user;
}

export default useUser;
