import { Meta, StoryObj } from '@storybook/react';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';
import BaseTemplate, { IBaseTemplate } from './baseTemplate';

const meta: Meta<typeof BaseTemplate> = {
  component: BaseTemplate,
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Primary: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as IBaseTemplate,
};
