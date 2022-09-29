import { ComponentMeta, Story } from '@storybook/react'

import { StarRating, StarRatingProps } from './StarRatingDisplay'

export default {
  title: 'molecules/StarRatingDisplay',
} as ComponentMeta<typeof StarRating>

const Template: Story<StarRatingProps> = args => <StarRating {...args} />

export const FullStarsSmall = Template.bind({})
FullStarsSmall.args = {
  rating: 5,
  size: 'sm',
}

export const FullStarsMedium = Template.bind({})
FullStarsMedium.args = {
  rating: 5,
  size: 'md',
}

export const FullStarsLarge = Template.bind({})
FullStarsLarge.args = {
  rating: 5,
  size: 'lg',
}

export const ZeroStarsSmall = Template.bind({})
ZeroStarsSmall.args = {
  rating: 0,
  size: 'sm',
}

export const ZeroStarsMedium = Template.bind({})
ZeroStarsMedium.args = {
  rating: 0,
  size: 'md',
}

export const ZeroStarsLarge = Template.bind({})
ZeroStarsLarge.args = {
  rating: 0,
  size: 'lg',
}
