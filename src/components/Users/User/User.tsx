type TProps = {
  user: IUser;
};

const User: React.FC<TProps> = ({ user }) => <span>{user.name}</span>;
export default User;