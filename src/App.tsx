import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { Users } from './components/Users/Users';
import useGetUsers from './hooks/useGetUsers';
import useUser from './hooks/useUser';

import styles from './App.module.scss';
import Todos from './components/Todos/Todos';

function App() {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<TID | null>(null);

  const { isLoading: usersLoad, data: users = [] } = useGetUsers();
  const { data: user } = useUser(userId || 0);

  if (usersLoad) return <span>loading...</span>;

  const handleUser = (id: TID) => {
    setUserId(id);
    queryClient.invalidateQueries({ queryKey: ['users'] });
    queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  return (
    <section>
      <h1>Tan Stack Query</h1>
      <main className={styles.main}>
        <Users users={users} onUserSelect={handleUser} />
        <Todos />
      </main>
    </section>
  );
}

export default App;