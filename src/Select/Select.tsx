import { cnb } from 'cnbuilder'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline'

export type SOption = {
  en_name: string
  es_name: string
}

type SelectProps<T> = {
  options: T[]
  selected: T
  locale: 'en' | 'es'
  classNames?: {
    root?: string
    button?: string
    panel?: string
    option?: string
  }
  onChange: (item: T) => void
}

export const Select = <T extends SOption>({
  options,
  selected,
  locale = 'en',
  classNames,
  onChange,
}: SelectProps<T>) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className={cnb('relative', classNames?.root)}>
        <Listbox.Button
          className={cnb(
            'border-gray-73 relative w-full cursor-default rounded-2xl border',
            'bg-white py-2.5 pl-3 text-left',
            'focus:outline-none focus-visible:ring-1 focus-visible:ring-primary',
            'focus-visible:border-primary focus-visible:ring-offset-primary',
            classNames?.button
          )}
        >
          <div className='truncate'>
            {locale === 'en' ? selected.en_name : selected.es_name}
          </div>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronDownIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            className={cnb(
              'absolute z-50 mt-1 max-h-60 w-full overflow-auto ring-primary',
              'rounded-xl bg-white py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none',
              classNames?.panel
            )}
          >
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active }) =>
                  cnb(
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                    active ? 'bg-gray-200 text-primary' : 'text-gray-600'
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <div
                      className={cnb(
                        'truncate',
                        selected ? 'font-medium' : 'font-normal'
                      )}
                    >
                      {locale === 'en' ? option.en_name : option.es_name}
                    </div>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-primary'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
