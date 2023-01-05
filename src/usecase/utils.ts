import { Context, useContext } from 'react';

export const useUseCase = <T>(context: Context<T | null>) => {
  const usecase = useContext(context);

  if (usecase === null) {
    throw new Error(`Please execute this Hooks in ${context.displayName}`);
  }

  return usecase as T;
};
