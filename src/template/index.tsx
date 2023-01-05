import { useTodoList } from '../usecase/useTodoList';
import clsx from 'clsx';
import { useState } from 'react';

const Page: React.FC = () => {
  const { data, isLoading, mutate, error } = useTodoList();
  const [input, setInput] = useState('');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error instanceof Error) {
    throw error;
  }

  return (
    <div className={clsx('flex', 'flex-col', 'space-y-2')}>
      <div>ToDo List</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate.create({
            title: input,
            done: false,
          });
          setInput('');
        }}
      >
        <input
          className={clsx('p-1', 'border')}
          value={input}
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
        />
      </form>
      <div>
        <ul className={clsx('flex', 'flex-col', 'space-y-1')}>
          {data.map((x) => {
            return (
              <li
                key={x.id}
                className={clsx(
                  'flex',
                  'flex-row',
                  'items-center',
                  'space-x-1'
                )}
              >
                <input
                  id={x.id}
                  type="checkbox"
                  checked={x.done}
                  onChange={() => mutate.done(x.id)}
                />
                <label htmlFor={x.id}>{x.title}</label>
                <button
                  className={clsx('p-1', 'border')}
                  onClick={() => mutate.remove(x.id)}
                >
                  🗑️
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
