import { useState } from 'react';
import styles from './Todos.module.scss';
import useTodos from '../../hooks/useTodos';

const Todos = () => {
  const [fetchTodos, setFetchTodos] = useState<boolean>(false);
  const { data: todos } = useTodos(fetchTodos);

  return (
    <section>
      <h4 className={styles.title}>Todos: </h4>

      <button
        className={styles.button}
        onClick={() => setFetchTodos((current) => !current)}
      >
        Fetch: {fetchTodos ? 'true' : 'false'}
      </button>

      <ul>
        {todos?.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </section>
  )
};

export default Todos;