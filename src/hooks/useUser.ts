import { useQuery } from "@tanstack/react-query";
import usersService from "../services/users.service";

const useUser = (userId: TID) => useQuery({
  queryKey: ['user'],
  queryFn: () => usersService.getUser(userId || 0),
  enabled: !!userId,
});

export default useUser;
