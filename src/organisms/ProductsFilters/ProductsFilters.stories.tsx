import { ComponentMeta, Story } from '@storybook/react'

import { ProductsFilters } from './ProductsFilters'
import {
  ProductsFilterSkeletonProps,
  ProductsFiltersSkeleton,
} from './ProductsFiltersSkeleton'

const categories = [
  { en_name: 'All categories', es_name: 'Todas las categorías' },
  { en_name: 'Category 1', es_name: 'Categoría 1' },
  { en_name: 'Category 2', es_name: 'Categoría 2' },
  { en_name: 'Category 3', es_name: 'Categoría 3' },
]
const subCategories = [
  { en_name: 'All subcategories', es_name: 'Todas las subcategorías' },
  { en_name: 'Subcategory 1', es_name: 'Subcategoría 1' },
  { en_name: 'Subcategory 2', es_name: 'Subcategoría 2' },
  { en_name: 'Subcategory 3', es_name: 'Subcategoría 3' },
]

const locales = {
  en: {
    title: 'Search products',
    button: 'Search',
    tabs: {
      vendor: 'Vendor',
      product: 'Product',
    },
    labels: {
      category: 'Category',
      subCategory: 'Subcategory',
      brand: 'Brand',
    },
  },
  es: {
    title: 'Buscar productos',
    button: 'Buscar',
    tabs: {
      vendor: 'Vendedor',
      product: 'Producto',
    },
    labels: {
      category: 'Categoría',
      subCategory: 'Subcategoría',
      brand: 'Marca',
    },
  },
}

export default {
  title: 'organisms/ProductsFilters',
  argTypes: {
    lang: {
      options: ['en', 'es'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ProductsFilters>

export const Default = ({ lang = 'en' }: { lang: 'es' | 'en' }) => {
  const locale = locales[lang]

  return (
    <ProductsFilters
      title={locale.title}
      buttonText={locale.button}
      categoriesSelectProps={{
        label: locale.labels.category,
        items: categories,
        value: categories[0],
        keyExtractor: c => c.en_name,
        renderItem: c => c[`${lang}_name`],
      }}
      subCategoriesSelectProps={{
        label: locale.labels.subCategory,
        items: subCategories,
        value: subCategories[0],
        keyExtractor: sc => sc.en_name,
        renderItem: sc => sc[`${lang}_name`],
      }}
      onSearch={() => {
        return
      }}
      onMinChange={() => {
        return
      }}
      onMaxChange={() => {
        return
      }}
    />
  )
}

const Template: Story<ProductsFilterSkeletonProps> = args => (
  <ProductsFiltersSkeleton {...args} />
)

// Skeleton stories
export const SkeletonWithThreeSelectsAndTabs = Template.bind({})
SkeletonWithThreeSelectsAndTabs.args = {
  selectsNumber: 3,
}

export const SkeletonWithThreeSelects = Template.bind({})
SkeletonWithThreeSelects.args = {
  selectsNumber: 3,
  withTabs: false,
}

export const SkeletonWithTwoSelects = Template.bind({})
SkeletonWithTwoSelects.args = {
  selectsNumber: 2,
  withTabs: false,
}
