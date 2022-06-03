import { useSelector } from "react-redux";
import { ReducerType } from "../../modules";

const useUser = () => {
  const { user } = useSelector(({ user }: ReducerType) => ({
    user: user.user,
  }));
  return user;
};

export const useUserId = () => {
  const user = useUser();
  return user && user.id;
};

export default useUser;
