import { useState } from 'react';
import { brandType } from '../../model/utils';
import { UseTodoList } from './interface';

export const useTodoList: UseTodoList = () => {
  const [data, setData] = useState([
    {
      id: brandType<'todo', string>('0'),
      title: '起きる',
      done: false,
    },
    {
      id: brandType<'todo', string>('1'),
      title: '朝ごはん',
      done: false,
    },
    {
      id: brandType<'todo', string>('2'),
      title: '歯磨き',
      done: false,
    },
    {
      id: brandType<'todo', string>('3'),
      title: '着替え',
      done: false,
    },
    {
      id: brandType<'todo', string>('4'),
      title: '出勤',
      done: false,
    },
  ]);

  return {
    data,
    isLoading: false,
    mutate: {
      create(draft) {
        setData((x) => {
          return [
            ...x,
            {
              id: brandType<'todo', string>(crypto.randomUUID()),
              ...draft,
            },
          ];
        });
      },
      done(id) {
        setData((x) => {
          return x.map((x) => {
            return x.id === id
              ? {
                  ...x,
                  done: !x.done,
                }
              : x;
          });
        });
      },
      remove(id) {
        return setData((x) => {
          return x.filter((x) => {
            return x.id !== id;
          });
        });
      },
    },
  };
};
