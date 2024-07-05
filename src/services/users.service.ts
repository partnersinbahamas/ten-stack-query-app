import { get } from "./api";

class UsersService {
  private URL = 'users';

  async getAll() {
    return get<IUser[]>(this.URL);
  };
  async getUser(id: TID) {
    return get<IUser>(`${this.URL}/${id}`);
  };
}

export default new UsersService();