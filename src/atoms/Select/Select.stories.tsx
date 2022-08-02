import { ComponentMeta, Story } from '@storybook/react'

import { Select, SelectProps } from './Select'

const CATEGORIES = ['Example 1', 'Example 2']

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: Story<SelectProps<string>> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  classNames: {
    root: 'w-80',
  },
  items: CATEGORIES,
  value: CATEGORIES[0],
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  classNames: {
    root: 'w-80',
  },
  items: CATEGORIES,
  value: CATEGORIES[0],
  label: 'Select an example',
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  classNames: {
    root: 'w-80',
  },
  items: CATEGORIES,
  placeholder: 'Select an item',
}
