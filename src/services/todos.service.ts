import { get } from "./api";


class TodoService {
  private URL = 'todos';

  async getTodos() {
    return get<any[]>(this.URL)
  }
}

export default new TodoService;