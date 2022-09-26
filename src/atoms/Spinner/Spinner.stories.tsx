import { ComponentMeta, Story } from '@storybook/react'

import { Spinner, SpinnerProps } from './Spinner'

export default {
  title: 'atoms/Spinner',
} as ComponentMeta<typeof Spinner>

const Template: Story<SpinnerProps> = args => <Spinner {...args} />

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xm',
}

export const Small = Template.bind({})
Small.args = { size: 'sm' }

export const Default = Template.bind({})
Default.args = { size: 'md' }

export const Large = Template.bind({})
Large.args = { size: 'lg' }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { size: 'xl' }

export const ExtraLargeX2 = Template.bind({})
ExtraLargeX2.args = { size: '2xl' }
