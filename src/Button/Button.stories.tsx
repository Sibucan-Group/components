import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  children: 'Contained',
}

export const Gradient = Template.bind({})
Gradient.args = {
  variant: 'gradient',
  color: 'primary',
  children: 'Gradient',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large',
  className: 'btn-wide',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small',
}

export const Loading = Template.bind({})
Loading.args = {
  variant: 'contained',
  loading: true,
  children: 'Loading',
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'contained',
  disabled: true,
  children: 'Disabled',
}
