import { cnb } from 'cnbuilder'

const spinnerSize = {
  'xm': 'w-8',
  'sm': 'w-10',
  'md': 'w-12',
  'lg': 'w-24',
  'xl': 'w-32',
  '2xl': 'w-48',
}

type SpinnerSize = typeof spinnerSize

export type SpinnerProps = {
  size: keyof SpinnerSize
}

export const Spinner = ({ size = 'md' }: SpinnerProps) => (
  <svg
    className={cnb('animate-spin text-primary', spinnerSize[size])}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    />
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    />
  </svg>
)
