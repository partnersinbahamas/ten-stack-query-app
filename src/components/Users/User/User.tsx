import styles from './User.module.scss';

type TProps = {
  user: IUser;
};

const User: React.FC<TProps> = ({ user }) =>
  <span className={styles.user}>{user.name}</span>;
export default User;