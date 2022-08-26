import { StarIcon as StarFilledIcon } from '@heroicons/react/solid'
import { StarIcon as StarEmptyIcon } from '@heroicons/react/outline'

import { cnb } from 'cnbuilder'

const stars = [1, 2, 3, 4, 5]

const starSize = {
  normal: 'w-4',
  medium: 'w-6',
  big: 'w-8',
}

export type StarRatingProps = {
  rating: number
  size: 'normal' | 'medium' | 'big'
}

export const StarRating = ({ rating, size }: StarRatingProps) => {
  return (
    <div className='flex'>
      {stars.map(i =>
        i <= rating ? (
          <StarFilledIcon
            key={i}
            className={cnb(starSize[size], 'text-yellow-400')}
          />
        ) : (
          <StarEmptyIcon
            key={i}
            className={cnb(starSize[size], 'text-yellow-400')}
          />
        )
      )}
    </div>
  )
}
