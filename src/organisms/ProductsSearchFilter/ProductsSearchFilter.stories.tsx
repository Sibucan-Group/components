import { ComponentMeta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { useState } from 'react'
import {
  ProductsSearchFilter,
  ProductsSearchFilterProps,
} from './ProductsSearchFilter'
import { Category, Department, SubCategory } from './types'
import { brandsOptions, categoriesOptions, subCategoriesOptions } from './data'

export default {
  title: 'ProductsSearchFilter',
  component: ProductsSearchFilter,
  argsTypes: {
    locale: { control: 'select' },
  },
} as ComponentMeta<typeof ProductsSearchFilter>

const Template: Story<
  ProductsSearchFilterProps<Category, SubCategory, Department>
> = args => <ProductsSearchFilter {...args} />

const TemplateHandleSearch: Story<
  ProductsSearchFilterProps<Category, SubCategory, Department>
> = args => {
  const [tab, setTab] = useState<'vendor' | 'product'>('product')
  const [selectedCategory, setSelectedCategory] = useState(categoriesOptions[0])
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategoriesOptions[0]
  )
  const [selectedBrand, setSelectedBrand] = useState(brandsOptions[0])
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  console.log(min)
  const handleSearch = () => {
    alert(`Search handled:
    tab: ${tab}
    selectedCategory: ${selectedCategory.en_name}
    selectedSubCategory: ${selectedSubCategory.en_name}
    selectedBrand: ${selectedBrand.en_name}
    min: ${min}
    max: ${max}
    `)
  }

  return (
    <ProductsSearchFilter
      {...args}
      tab={tab}
      selectedCategory={selectedCategory}
      selectedSubCategory={selectedSubCategory}
      selectedBrand={selectedBrand}
      setTab={setTab}
      onCategoriesChange={option => setSelectedCategory(option)}
      onSubcategoriesChange={option => setSelectedSubCategory(option)}
      onBrandsChange={option => setSelectedBrand(option)}
      onMinChange={setMin}
      onMaxChange={setMax}
      handleSearch={handleSearch}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Search Products',
  buttonText: 'Search',
  tab: 'product',
  tabsText: { vendor: 'Vendor', product: 'Product' },
  selectedCategory: categoriesOptions[0],
  selectedSubCategory: subCategoriesOptions[0],
  selectedBrand: brandsOptions[0],
  categoriesOptions: categoriesOptions,
  subCategoriesOptions: subCategoriesOptions,
  brandsOptions: brandsOptions,
  setTab: action('onClick'),
}

export const HandleSearch = TemplateHandleSearch.bind({})
HandleSearch.args = {
  ...Default.args,
}
