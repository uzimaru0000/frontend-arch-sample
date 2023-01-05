import { UseTodoList } from './interface';
import useSWR from 'swr';
import { useCallback } from 'react';
import { Todo } from '../../model/todo';
import { brandType } from '../../model/utils';

export const useTodoList: UseTodoList = () => {
  const { data, isLoading, error, mutate } = useSWR<Todo[]>(
    '/todo-list',
    () => {
      const storedTodoList = localStorage.getItem('todo-list');

      if (!storedTodoList) {
        return [];
      }

      return JSON.parse(storedTodoList);
    }
  );

  const create = useCallback<ReturnType<UseTodoList>['mutate']['create']>(
    (draft) => {
      mutate((x) => {
        const data = [
          ...(x ? x : []),
          { id: brandType<'todo', string>(crypto.randomUUID()), ...draft },
        ];

        localStorage.setItem('todo-list', JSON.stringify(data));

        return data;
      });
    },
    []
  );
  const done = useCallback<ReturnType<UseTodoList>['mutate']['done']>((id) => {
    mutate((x) => {
      if (!x) {
        return x;
      }

      const data = x.map((x) => {
        return x.id === id
          ? {
              ...x,
              done: !x.done,
            }
          : x;
      });

      localStorage.setItem('todo-list', JSON.stringify(data));

      return data;
    });
  }, []);
  const remove = useCallback<ReturnType<UseTodoList>['mutate']['remove']>(
    (id) => {
      mutate((x) => {
        if (!x) {
          return x;
        }

        const data = x.filter((x) => {
          return x.id !== id;
        });

        localStorage.setItem('todo-list', JSON.stringify(data));

        return data;
      });
    },
    []
  );

  return {
    data: data ?? [],
    isLoading,
    mutate: {
      create,
      done,
      remove,
    },
    error,
  };
};
