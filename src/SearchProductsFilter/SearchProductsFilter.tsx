export type SearchProductsFilterProps = {
  title: string
  tab: 'vendor' | 'product'
}

export const SearchProductsFilter = ({
  title,
  tab,
}: SearchProductsFilterProps) => {
  return (
    <div className='h-[516px] w-[348px] rounded-2xl bg-base-100 shadow-lg'>
      <header>
        <h3 className='p-2 text-center text-xl font-semibold'>{title}</h3>
      </header>
      tab: {tab}
    </div>
  )
}
