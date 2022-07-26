import { cnb } from 'cnbuilder'
import { Dispatch, SetStateAction } from 'react'

export type SearchProductsFilterProps = {
  title: string
  tab: 'vendor' | 'product'
  setTab: Dispatch<SetStateAction<'vendor' | 'product'>>
}

export const SearchProductsFilter = ({
  title,
  tab = 'product',
  setTab,
}: SearchProductsFilterProps) => {
  return (
    <div className='h-[516px] w-[348px] rounded-2xl bg-base-100 p-4 shadow-lg'>
      <header>
        <h3 className='p-2 text-center text-xl font-semibold'>{title}</h3>
      </header>
      <div className='rounded-full text-white transition'>
        <button
          className={cnb(
            'w-[158px] rounded-l-full p-1 transition duration-300',
            tab === 'vendor' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => {
            setTab('vendor')
          }}
        >
          Vendor
        </button>
        <button
          className={cnb(
            'w-[158px] rounded-r-full p-1 transition duration-300',
            tab === 'product' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => {
            setTab('product')
          }}
        >
          Product
        </button>
      </div>
    </div>
  )
}
