import styles from './Users.module.scss';

type TProps = {
  users: IUser[];
  onUserSelect: (id: TID) => void,
};

export const Users: React.FC<TProps> = ({ users, onUserSelect }) => (
  <ul className={styles.users}>
    {users.map((user: IUser) => (
      <li key={user.id} className={styles.user} onClick={() => onUserSelect(user.id)}>
        <span>{user.name}</span>
      </li>
    ))}
  </ul>
);