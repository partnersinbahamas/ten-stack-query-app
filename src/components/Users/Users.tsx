import User from './User/User';
import styles from './Users.module.scss';

type TProps = {
  users: IUser[];
  onUserSelect: (id: TID) => void,
};

export const Users: React.FC<TProps> = ({ users, onUserSelect }) => (
  <ul className={styles.users}>
    {users.map((user: IUser) => (
      <li key={user.id}  onClick={() => onUserSelect(user.id)}>
        <User user={user} />
      </li>
    ))}
  </ul>
);