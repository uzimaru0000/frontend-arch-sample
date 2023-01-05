import { createContext, useContext } from 'react';
import { useUseCase } from '../utils';
import { UseTodoList } from './interface';

const context = createContext<UseTodoList | null>(null);

export const useTodoList: UseTodoList = () => {
  return useUseCase(context)();
};

export const UseTodoListProvider = context.Provider;
