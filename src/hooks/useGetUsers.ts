import { useQuery } from "@tanstack/react-query";
import usersService from "../services/users.service";

const initialUserData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
  },
];

const useGetUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: () => usersService.getAll(),
  initialData: () => initialUserData,
  staleTime: 100, // amount of time when data will be aktual considered in ms
});

export default useGetUsers;