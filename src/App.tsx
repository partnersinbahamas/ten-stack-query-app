import { useQuery, useQueryClient } from '@tanstack/react-query';

import UsersService from './services/users.service';
import { Users } from './components/Users/Users';

import './App.module.scss';
import { useEffect, useState } from 'react';
import useGetUsers from './hooks/useGetUsers';

function App() {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<TID | null>(null);

  const { isLoading: usersLoad, data: users = [] } = useGetUsers();

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => UsersService.getUser(userId || 0),
    enabled: !!userId,
  });

  console.log(user);

  if (usersLoad) return <span>loading...</span>;


  const handleUser = (id: TID) => {
    setUserId(id);
    queryClient.invalidateQueries({ queryKey: ['users'] });
    queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  return (
    <section>
      <h1>Tan Stack Query</h1>
      <main>
        <Users users={users} onUserSelect={handleUser} />
      </main>
    </section>
  );
}

export default App;