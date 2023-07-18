import { Meta, StoryObj } from '@storybook/react';
import homepage_logo2 from '../../../public/homepage_logo2.png';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const image = {
  src: homepage_logo2,
  alt: 'hearthstone',
};

export const Primary: Story = {
  render: () => <Navbar />,
};
