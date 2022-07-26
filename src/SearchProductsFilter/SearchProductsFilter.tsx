export type SearchProductsFilterProps = {
  tab: 'vendor' | 'product'
}

export const SearchProductsFilter = ({ tab }: SearchProductsFilterProps) => {
  return <div> tab: {tab} </div>
}
