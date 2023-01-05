import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { UseTodoListProvider } from '../usecase/useTodoList';
import { useTodoList } from '../usecase/useTodoList/mock';
import IndexPage from './index';

export default {
  title: 'pages/IndexPage',
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = () => (
  <UseTodoListProvider value={useTodoList}>
    <IndexPage />
  </UseTodoListProvider>
);

export const indexPage = Template.bind({});
