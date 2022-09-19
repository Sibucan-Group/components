import { Dispatch, SetStateAction } from 'react'

import { Button, Select, SelectProps, SelectOption } from '../../atoms'

type CurrencyInputProps = {
  placeholder?: string
  onChange?: (value: string) => void
}

const CurrencyInput = ({ placeholder, onChange }: CurrencyInputProps) => {
  return (
    <div className='relative'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <span className='sm:text-sm'> $ </span>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        onChange={e => onChange?.(e.target.value)}
        className='w-32 rounded-2xl border border-gray-400 py-2 px-1 pl-6 placeholder:text-gray-500
          focus:outline-none focus-visible:border-primary focus-visible:ring-1
          focus-visible:ring-primary focus-visible:ring-offset-primary'
      />
    </div>
  )
}

export type ProductsFiltersTab = 'vendor' | 'product'

export type ProductsFiltersProps<C, SC /*,B*/> = {
  title: string
  buttonText: string
  // TODO: uncomment when backend implements feat
  // tab: ProductsFiltersTab
  // tabsText: { vendor: string; product: string }
  // onTabChange: Dispatch<SetStateAction<ProductsFiltersTab>>
  // brandsSelectProps: SelectProps<B>
  categoriesSelectProps: SelectProps<C>
  subCategoriesSelectProps: SelectProps<SC>
  onSearch: () => void
  onMinChange: Dispatch<SetStateAction<string>>
  onMaxChange: Dispatch<SetStateAction<string>>
}

export const ProductsFilters = <
  C extends SelectOption,
  SC extends SelectOption
  // B extends SelectOption
>({
  title,
  buttonText,
  categoriesSelectProps,
  subCategoriesSelectProps,
  // TODO: uncomment when backend implements feat
  // brandsSelectProps,
  // tab = 'product',
  // tabsText,
  // onTabChange,
  onSearch,
  onMinChange,
  onMaxChange,
}: ProductsFiltersProps<C, SC /*, B*/>) => {
  return (
    <div className='w-96 rounded-2xl bg-base-100 p-6 shadow-lg'>
      <div className='mb-2 text-center text-xl font-semibold'>{title}</div>
      {/* // TODO: uncomment when backend implements feat */}
      {/* <div className='flex items-center rounded-full px-2 text-white transition'>
        <button
          className={cnb(
            'grow rounded-l-full p-1 transition duration-300',
            tab === 'vendor' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => onTabChange?.('vendor')}
        >
          {tabsText.vendor}
        </button>
        <button
          className={cnb(
            'grow rounded-r-full p-1 transition duration-300',
            tab === 'product' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => onTabChange?.('product')}
        >
          {tabsText.product}
        </button>
      </div> */}
      <div className='my-10 space-y-4'>
        <Select {...categoriesSelectProps} />
        <Select {...subCategoriesSelectProps} />
        {/* // TODO: uncomment when backend implements feat */}
        {/* <Select {...brandsSelectProps} /> */}
      </div>
      <div className='my-10 flex w-full items-center justify-between'>
        <CurrencyInput placeholder='Min' onChange={onMinChange} />
        <CurrencyInput placeholder='Max' onChange={onMaxChange} />
      </div>
      <div className='w-full text-center'>
        <Button
          type='submit'
          variant='contained'
          className='btn-wide !text-lg font-bold'
          onClick={onSearch}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
