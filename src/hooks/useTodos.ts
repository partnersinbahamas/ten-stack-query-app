import { useQuery } from "@tanstack/react-query";
import todosService from "../services/todos.service";

const useTodos = (fetching: boolean) => useQuery({
  queryKey: ['todos'],
  queryFn: () => todosService.getTodos(),
  enabled: fetching,
});

export default useTodos;