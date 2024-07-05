import User from "./User/User";

type TProps = {
  users: IUser[];
};

export const Users: React.FC<TProps> = ({ users }) => (
  <ul>
    {users.map((user: IUser) => (
    <li key={user.id}>
        <User user={user} />
    </li>
    ))}
  </ul>
);