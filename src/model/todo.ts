import { BrandType } from './utils';

export type Todo = {
  id: BrandType<'todo', string>;
  title: string;
  done: boolean;
};
