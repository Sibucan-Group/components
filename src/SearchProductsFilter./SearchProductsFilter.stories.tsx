import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { SearchProductsFilter } from './SearchProductsFilter'

export default {
  title: 'SearchProductsFilter',
  component: SearchProductsFilter,
} as ComponentMeta<typeof SearchProductsFilter>

const Template: ComponentStory<typeof SearchProductsFilter> = args => {
  const [tab, setTab] = useState<'vendor' | 'product'>(args.tab)

  return <SearchProductsFilter title={args.title} tab={tab} setTab={setTab} />
}

export const Products = Template.bind({})
Products.args = {
  title: 'Search Products',
  tab: 'product',
}

export const Vendors = Template.bind({})
Vendors.args = {
  title: 'Search Vendors',
  tab: 'vendor',
}
