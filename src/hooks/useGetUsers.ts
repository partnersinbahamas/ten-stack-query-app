import { useQuery } from "@tanstack/react-query";
import usersService from "../services/users.service";

const useGetUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: () => usersService.getAll(),
});

export default useGetUsers;