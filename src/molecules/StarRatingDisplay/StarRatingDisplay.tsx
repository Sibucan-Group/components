import { StarIcon } from '@heroicons/react/outline'

import { cnb } from 'cnbuilder'

const stars = [1, 2, 3, 4, 5]

const starSize = {
  sm: 'w-4',
  md: 'w-6',
  lg: 'w-8',
}

type StartSize = typeof starSize

export type StarRatingProps = {
  rating: number
  size: keyof StartSize
}

export const StarRating = ({ rating, size }: StarRatingProps) => {
  return (
    <div className='flex'>
      {stars.map(i =>
        i <= rating ? (
          <StarIcon
            key={i}
            className={cnb(starSize[size], 'fill-current text-yellow-400')}
          />
        ) : (
          <StarIcon
            key={i}
            className={cnb(starSize[size], 'text-yellow-400')}
          />
        )
      )}
    </div>
  )
}
