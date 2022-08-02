import { ComponentMeta, Story } from '@storybook/react'

import { ProductsFilters, ProductsFiltersProps } from './ProductsFilters'

const categories = ['All', 'Category 1', 'Category 2', 'Category 3']
const subCategories = ['All', 'SubCategory 1', 'SubCategory 2', 'SubCategory 3']
const brands = ['All', 'Brand 1', 'Brand 2', 'Brand 3']

export default {
  title: 'organisms/ProductsFilters',
  component: ProductsFilters,
} as ComponentMeta<typeof ProductsFilters>

const Template: Story<ProductsFiltersProps<string, string, string>> = args => (
  <ProductsFilters {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Search Products',
  buttonText: 'Search',
  tab: 'product',
  tabsText: { vendor: 'Vendor', product: 'Product' },
  categoriesSelectProps: {
    label: 'Categories',
    items: categories,
    value: categories[0],
  },
  subCategoriesSelectProps: {
    label: 'Subcategories',
    items: subCategories,
    value: subCategories[0],
  },
  brandsSelectProps: {
    label: 'Brand',
    items: brands,
    value: brands[0],
  },
}
