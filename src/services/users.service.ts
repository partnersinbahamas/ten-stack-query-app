import { get, post } from "./api";

class UsersService {
  private URL = 'users';

  async getAll() {
    return get<IUser[]>(this.URL);
  };
  async getUser(id: TID) {
    return get<IUser>(`${this.URL}/${id}`);
  };

  async createUser(userName: string) {
    return post(this.URL,   {
      "id": 1,
      "name": userName,
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
    },)
  }
}

export default new UsersService();