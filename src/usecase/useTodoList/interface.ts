import { Todo } from '../../model/todo';

export interface UseTodoList {
  (): {
    data: Todo[];
    isLoading: boolean;
    mutate: {
      done(id: Todo['id']): void;
      remove(id: Todo['id']): void;
      create(draft: Omit<Todo, 'id'>): void;
    };
    error?: unknown;
  };
}
