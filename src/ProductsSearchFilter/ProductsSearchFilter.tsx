import { Dispatch, SetStateAction } from 'react'
import { cnb } from 'cnbuilder'

import { Button } from '../Button'
import { Select, SOption } from '../Select'

interface ProductsSearchFilterOptions<T, S, U> {
  title: string
  buttonText: string
  tab: 'vendor' | 'product'
  tabsText: { vendor: string; product: string }
  locale: 'en' | 'es'
  selectedCategory: T
  selectedSubCategory: S
  selectedBrand: U
  categoriesOptions: T[]
  subCategoriesOptions: S[]
  brandsOptions: U[]
}
interface ProductsSearchFilterHandlers<T, S, U> {
  setTab: Dispatch<SetStateAction<'vendor' | 'product'>>
  handleSearch: () => void
  onCategoriesChange: (item: T) => void
  onSubcategoriesChange: (item: S) => void
  onBrandsChange: (item: U) => void
  onMinChange: Dispatch<SetStateAction<string>>
  onMaxChange: Dispatch<SetStateAction<string>>
}

export type ProductsSearchFilterProps<T, S, U> = ProductsSearchFilterOptions<
  T,
  S,
  U
> &
  ProductsSearchFilterHandlers<T, S, U>

export const ProductsSearchFilter = <
  T extends SOption,
  S extends SOption,
  U extends SOption
>({
  title,
  buttonText,
  tab = 'product',
  tabsText,
  locale,
  selectedCategory,
  selectedSubCategory,
  selectedBrand,
  categoriesOptions,
  subCategoriesOptions,
  brandsOptions,
  setTab,
  handleSearch,
  onCategoriesChange,
  onSubcategoriesChange,
  onBrandsChange,
  onMinChange,
  onMaxChange,
}: ProductsSearchFilterProps<T, S, U>) => {
  return (
    <div className='h-[504px] w-[348px] rounded-2xl bg-base-100 p-4 shadow-lg'>
      <header>
        <h3 className='p-2 text-center text-xl font-semibold'>{title}</h3>
      </header>
      <div className='rounded-full text-white transition'>
        <button
          className={cnb(
            'w-[158px] rounded-l-full p-1 transition duration-300',
            tab === 'vendor' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => setTab('vendor')}
        >
          {tabsText.vendor}
        </button>
        <button
          className={cnb(
            'w-[158px] rounded-r-full p-1 transition duration-300',
            tab === 'product' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => setTab('product')}
        >
          {tabsText.product}
        </button>
      </div>
      <div className='my-10 space-y-4'>
        {/* Categories */}
        <Select
          options={categoriesOptions}
          selected={selectedCategory}
          locale={locale}
          classNames={{
            button: 'h-12 px-4 bg-white shadow w-full',
            panel: 'w-full',
          }}
          onChange={onCategoriesChange}
        />
        {/* Subcategories */}
        <Select
          options={subCategoriesOptions}
          selected={selectedSubCategory}
          locale={locale}
          classNames={{
            button: 'h-12 px-4 bg-white shadow w-full',
            panel: 'w-full',
          }}
          onChange={onSubcategoriesChange}
        />
        {/* Brands */}
        <Select
          options={brandsOptions}
          selected={selectedBrand}
          locale={locale}
          classNames={{
            button: 'h-12 px-4 bg-white shadow w-full',
            panel: 'w-full',
          }}
          onChange={onBrandsChange}
        />
      </div>

      <div className='my-10 flex w-full items-center justify-between'>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <span className='sm:text-sm'> $ </span>
          </div>
          <input
            type='text'
            placeholder='Min'
            onChange={e => onMinChange(e.target.value)}
            className='w-32 rounded-2xl border py-2 px-1 pl-6 shadow placeholder:text-gray-500
              focus:outline-none focus-visible:border-primary focus-visible:ring-1
              focus-visible:ring-primary focus-visible:ring-offset-primary'
          />
        </div>
        <div className='relative '>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <span className='sm:text-sm'> $ </span>
          </div>
          <input
            type='text'
            placeholder='Max'
            onChange={e => onMaxChange(e.target.value)}
            className='w-32 rounded-2xl border py-2 px-1 pl-6 shadow placeholder:text-gray-500
              focus:outline-none focus-visible:border-primary focus-visible:ring-1
              focus-visible:ring-primary focus-visible:ring-offset-primary'
          />
        </div>
      </div>
      <div className='w-full text-center'>
        <Button
          type='submit'
          variant='contained'
          className='btn-wide !text-lg font-bold'
          onClick={handleSearch}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
