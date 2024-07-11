import { SyntheticEvent, useState } from 'react';
import { useIsFetching, useMutation, useQueryClient } from '@tanstack/react-query';

import { Users } from './components/Users/Users';
import useGetUsers from './hooks/useGetUsers';
import useUser from './hooks/useUser';

import styles from './App.module.scss';
import Todos from './components/Todos/Todos';
import User from './components/Users/User/User';
import usersService from './services/users.service';

function App() {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<TID | null>(null);
  const [userName, setUserName] = useState<string>('');

  // global hook with return count of fetching, there are as well useMutating
  const countFetching = useIsFetching();
  const { data: users = [] } = useGetUsers();
  const { data: user, refetch } = useUser(userId || 0);

  /* mutate vs async mutate
    with async mutet with need to by outself handle the errors, so with try, catch, finaly
    mutate make it by default
  */
  const { mutate } = useMutation({
    mutationKey: ['create user'],
    mutationFn: (name: string) => usersService.createUser(name),
    onSuccess: () => {
      setUserName('');
      alert('User created');
    },
    // analog finaly
    onSettled: () => {}
  })

  const handleUser = (id: TID) => {
    setUserId(id);
    if (userId) refetch();
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    mutate(userName);
  }

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
        {!countFetching ? (
          <>
            <form onSubmit={(event) => submitHandler(event)}>
              <h3>Create user</h3>
                <input
                type="text"
                placeholder='Enter user name'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />

              <button>Create</button>
            </form>
            <div className={styles.wrapper}>
              <Users users={users} onUserSelect={handleUser} />
              {user && userId && (
                <div>
                  <p style={{marginTop: 0}}>Selected user:</p>
                  <User user={user} />
                </div>
              )}
              <Todos />
            </div>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </main>
    </section>
  );
}

export default App;