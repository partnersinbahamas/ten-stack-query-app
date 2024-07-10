import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { Users } from './components/Users/Users';
import useGetUsers from './hooks/useGetUsers';
import useUser from './hooks/useUser';

import styles from './App.module.scss';
import Todos from './components/Todos/Todos';
import User from './components/Users/User/User';

function App() {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<TID | null>(null);

  const { isLoading: usersLoad, data: users = [] } = useGetUsers();
  const { data: user, refetch } = useUser(userId || 0);

  if (usersLoad) return <span>loading...</span>;

  const handleUser = (id: TID) => {
    setUserId(id);
    if (userId) refetch();
  };

  const handleRevalidate = () => {
    //using for revalidate data for useQuery: analog refetch
    queryClient.invalidateQueries({ queryKey: ['users'] });
    queryClient.invalidateQueries({ queryKey: ['todos'] });
    queryClient.invalidateQueries({ queryKey: ['user'] });
  }

  return (
    <section>
      <header className={styles.header}>
        <h1 className={styles.title}>Tan Stack Query</h1>
        <button className={styles.revalidate} onClick={handleRevalidate}>
          Revalidate all
        </button>
      </header>

      <main className={styles.main}>
        <Users users={users} onUserSelect={handleUser} />
        {user && userId && (
          <div>
            <p>Selected user:</p>
            <User user={user} />
          </div>
        )}
        <Todos />
      </main>
    </section>
  );
}

export default App;