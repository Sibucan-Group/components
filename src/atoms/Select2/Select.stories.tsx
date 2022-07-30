import { ComponentMeta, Story } from '@storybook/react'

import { Select, SelectProps } from './Select'

interface Category {
  en_name: string
  es_name: string
}

const CATEGORIES: Category[] = [
  {
    en_name: 'Example 1',
    es_name: 'Ejemplo 2',
  },
  {
    en_name: 'Example 2',
    es_name: 'Ejemplo 2',
  },
]

export default {
  title: 'Select2',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: Story<SelectProps<Category>> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  classNames: {
    button: 'w-[316px] bg-white shadow p-3',
    panel: 'w-[316px]',
  },
  items: CATEGORIES,
  value: CATEGORIES[0],
  keyExtractor: c => c.en_name,
  renderItem: c => c.en_name,
}
