import { Fragment, ReactNode } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { cnb } from 'cnbuilder'

export type SelectOption = {
  toString: () => string
}

export type SelectProps<T = SelectOption> = {
  label?: string
  items: T[]
  value?: T
  placeholder?: string
  classNames?: Partial<{
    root: string
    button: string
    panel: string
  }>
  keyExtractor?(item: T): string | number
  renderItem?(item: T): ReactNode
  onChange?: (value?: T) => void
}

export const Select = <T extends SelectOption>({
  label,
  items,
  value,
  placeholder,
  onChange,
  keyExtractor,
  renderItem,
  classNames,
}: SelectProps<T>) => (
  <div className={cnb('bg-transparent', classNames?.root)}>
    {label && <label className='block mb-1 font-medium'>{label}</label>}
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
            <span className='block text-gray-500 truncate'>{placeholder}</span>
          )}
          <span className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none'>
            <ChevronDownIcon
              className='w-5 h-5 text-gray-400'
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
              'absolute w-full z-50 mt-1 max-h-60 overflow-auto ring-primary',
              'rounded-xl bg-white py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none',
              classNames?.panel
            )}
          >
            {items.map(i => (
              <Listbox.Option
                key={keyExtractor?.(i) || i.toString()}
                value={i}
                className={({ active }) =>
                  cnb(
                    'relative cursor-pointer select-none py-2 pl-10 pr-4',
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
                      <span className='flex absolute inset-y-0 left-0 items-center pl-3 text-primary'>
                        <CheckIcon className='w-5 h-5' aria-hidden='true' />
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
