import { Fragment, ReactNode } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { cnb } from 'cnbuilder'

export type SelectOption = {
  toString: () => string
}

export type CommonSelectProps<T> = {
  label?: string
  items: T[]
  value?: T
  placeholder?: string
  classNames?: Partial<{
    root: string
    button: string
    panel: string
  }>
  onChange?: (value?: T) => void
}

export type ObjectSelectProps<T> = T extends string | number
  ? {
      keyExtractor?: (item: T) => string | number
      renderItem?: (item: T) => ReactNode
    }
  : {
      keyExtractor: (item: T) => string | number
      renderItem: (item: T) => ReactNode
    }

export type SelectProps<T> = CommonSelectProps<T> & ObjectSelectProps<T>

export const Select = <T extends SelectOption>({
  label,
  items,
  value,
  placeholder,
  onChange,
  keyExtractor,
  renderItem,
  classNames,
}: SelectProps<T>) => {
  return (
    <div className={cnb('bg-transparent', classNames?.root)}>
      {label && <label className='mb-1 block font-medium'>{label}</label>}
      <Listbox value={value} onChange={v => onChange?.(v)}>
        <div className='relative'>
          <Listbox.Button
            className={cnb(
              'relative w-full rounded-2xl border bg-white py-2.5 pl-4 pr-10 text-left',
              'focus:outline-none focus-visible:ring-1 focus-visible:ring-primary',
              'focus-visible:border-primary focus-visible:ring-offset-primary',
              classNames?.button
            )}
          >
            {value ? (
              <div className='truncate'>{renderItem?.(value) || value}</div>
            ) : (
              <span className='block truncate text-gray-500'>
                {placeholder}
              </span>
            )}
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
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
                'rounded-xl bg-white p-2 shadow-lg ring-1 ring-opacity-5 focus:outline-none',
                classNames?.panel
              )}
            >
              {items.map(i => (
                <Listbox.Option
                  key={keyExtractor?.(i) || i.toString()}
                  value={i}
                  className={({ active }) =>
                    cnb(
                      'relative cursor-default select-none rounded-xl py-2 pl-10 pr-4 transition-all',
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
                        {renderItem?.(i) || i}
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
    </div>
  )
}
