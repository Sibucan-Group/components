import { Dispatch, SetStateAction } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import { cnb } from 'cnbuilder'

const counterSize = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const textSize = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

type CounterSize = typeof counterSize

export type CounterProps = {
  size: keyof CounterSize
  count: number
  stock: number
  setCount: Dispatch<SetStateAction<number>>
}

export const Counter = ({ size, count, setCount, stock }: CounterProps) => {
  const onMinus = () => {
    if (count === 1) return
    setCount(prev => prev - 1)
  }

  const onPlus = () => {
    if(count<stock)
    setCount(prev => prev + 1)
  }

  return (
    <div className='btn-group flex items-center gap-5'>
      <button
        className={cnb(
          'btn- btn btn-outline btn-circle border-2',
          counterSize[size]
        )}
        onClick={onMinus}
      >
        <MinusIcon className='w-5' />
      </button>
      <span className={cnb('font-bold', textSize[size])}>{count}</span>
      <button
        className={cnb(
          'btn btn-outline btn-circle border-2',
          counterSize[size]
        )}
        onClick={onPlus}
      >
        <PlusIcon className='w-5' />
      </button>
    </div>
  )
}
