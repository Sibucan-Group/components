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
const brands = [
  { en_name: 'All brands', es_name: 'Todas las marcas' },
  { en_name: 'Brand 1', es_name: 'Marca 1' },
  { en_name: 'Brand 2', es_name: 'Marca 2' },
  { en_name: 'Brand 3', es_name: 'Marca 3' },
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
      tabsText={locale.tabs}
      tab='product'
      categoriesSelectProps={{
        label: locale.labels.category,
        items: categories,
        value: categories[0],
        classNames: {
          button: 'shadow',
        },
        keyExtractor: c => c.en_name,
        renderItem: c => c[`${lang}_name`],
      }}
      subCategoriesSelectProps={{
        label: locale.labels.subCategory,
        items: subCategories,
        value: subCategories[0],
        classNames: {
          button: 'shadow',
        },
        keyExtractor: sc => sc.en_name,
        renderItem: sc => sc[`${lang}_name`],
      }}
      brandsSelectProps={{
        label: locale.labels.brand,
        items: brands,
        value: brands[0],
        classNames: {
          button: 'shadow',
        },
        keyExtractor: b => b.en_name,
        renderItem: b => b[`${lang}_name`],
      }}
      onTabChange={() => {
        return
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

export const SkeletonWithTreeSelects = Template.bind({})
SkeletonWithTreeSelects.args = {
  selectsNumber: 3,
}
