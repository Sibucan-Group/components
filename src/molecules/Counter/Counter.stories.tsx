import { ComponentMeta, Story } from '@storybook/react'
import { useState } from 'react'

import { Counter, CounterProps } from './Counter'

export default {
  title: 'molecules/Counter',
} as ComponentMeta<typeof Counter>

const Template: Story<CounterProps> = args => <Counter {...args} />

const TemplateIncrement: Story<CounterProps> = () => {
  const [count, setCount] = useState(1)

  const stock=0

  return <Counter size={'sm'} count={count} setCount={setCount} stock={stock}/>
}

const lambda = () => null

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  count: 1,
  setCount: lambda,
}

export const Medium = Template.bind({})
Medium.args = {
  count: 1,
  size: 'md',
  setCount: lambda,
}

export const Large = Template.bind({})
Large.args = {
  count: 1,
  size: 'lg',
  setCount: lambda,
}

export const IncrementDecrement = TemplateIncrement.bind({})
