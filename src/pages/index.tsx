import Page from '../template/index';
import { UseTodoListProvider } from '../usecase/useTodoList';
import { useTodoList } from '../usecase/useTodoList/swr';

export default () => {
  return (
    <UseTodoListProvider value={useTodoList}>
      <Page />
    </UseTodoListProvider>
  );
};
