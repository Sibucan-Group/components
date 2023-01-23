import { ReactNode } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Button } from '../../atoms'

export type ProductCardProps = {
  name: string
  price: number
  addToCartText: string
  image: ReactNode
  onAddToCart: () => void
}

export const ProductCard = ({
  name,
  price,
  addToCartText,
  image,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className='card-compact card w-36 xs:w-44 xs:h-72 h-60 md:w-52 md:h-auto  lg:w-60 lg:h-auto bg-white shadow-xl'>
      <figure>{image}</figure>
      <div className='card-body'>
        <h2 className='lg:min-h-16 text-sm lg:text-lg font-medium line-clamp-1 lg:line-clamp-3'>{name}</h2>
        <p className='card-title text-sm lg:text-base truncate italic text-gray-900'>${price}</p>
        <div className='group card-actions justify-end'>
          <button
            className='btn btn-primary btn-circle shadow-md transition-all lg:group-hover:hidden'
            onClick={onAddToCart}
          >
            <ShoppingCartIcon className='w-6 text-white' />
          </button>
          <Button
            variant='contained'
            className='hidden transition-all lg:group-hover:inline-flex'
            onClick={onAddToCart}
          >
            <ShoppingCartIcon className='mr-2 w-6 text-white' />
            <span>{addToCartText}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
