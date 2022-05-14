import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Default',
} as ComponentMeta<'div'>

export const HelloWorld: ComponentStory<'div'> = () => <div>Hello, World!</div>
