import { Story, Meta } from '@storybook/react'

import {
  SearchProductsFilter,
  SearchProductsFilterProps,
} from './SearchProductsFilter'

export default {
  title: 'SearchProductsFilter',
  component: SearchProductsFilter,
} as Meta

const Template: Story<SearchProductsFilterProps> = args => (
  <SearchProductsFilter {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Search Products',
  tab: 'vendor',
}
