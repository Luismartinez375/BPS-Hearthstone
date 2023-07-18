import { Meta, StoryObj } from '@storybook/react';
import SearchBar, { ISearchBar } from './SearchBar';
import { mockSearchBarProps } from './SearchBar.mocks';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = {
  args: {
    ...mockSearchBarProps.base,
  } as ISearchBar,
};
