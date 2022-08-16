import { ReactNode } from 'react'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { cnb } from 'cnbuilder'

export type ProductCardProps = {
  productName: string
  productPrice: number
  isFavorite: boolean
  image: ReactNode
  onAddToCart: () => void
  onFavorite: () => void
}

export const ProductCard = ({
  productName,
  productPrice,
  isFavorite,
  image,
  onAddToCart: onAddToCard,
  onFavorite,
}: ProductCardProps) => {
  return (
    <div className='card card-compact w-56 bg-white shadow-xl'>
      <figure>{image}</figure>
      <div className='card-body'>
        <h2 className='min-h-16 text-lg font-medium line-clamp-3'>
          {productName}
        </h2>
        <p className='card-title truncate italic text-gray-900'>
          ${productPrice}
        </p>
        <div className='card-actions justify-between'>
          <button
            className='btn btn-primary btn-circle shadow-md'
            onClick={onAddToCard}
          >
            <ShoppingCartIcon className='w-7 text-white' />
          </button>
          <button
            className={cnb(
              'btn btn-circle shadow-md',
              isFavorite
                ? 'btn-error'
                : 'border-neutral bg-neutral hover:border-error hover:bg-error'
            )}
            onClick={onFavorite}
          >
            <HeartIcon className='w-7 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
