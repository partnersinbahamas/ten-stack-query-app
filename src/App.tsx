import { useQuery } from '@tanstack/react-query';
import './App.module.scss';
import { spawn } from 'child_process';

const BASE_URL="https://jsonplaceholder.typicode.com";

function App() {
  const { isLoading, data } = useQuery({
    queryKey: ['coins'],
    queryFn: () => fetch(`${BASE_URL}/todos`).then(response => response.json()),
  });

  if (isLoading) return <span>loading...</span>;

  return (
    <section>
      <h1>Tan Stack Query</h1>

      <ul>
        {data.map((item: ITodo) => (
          <li key={item.id}>
            <span>{item.title}:</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;