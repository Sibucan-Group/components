import { ComponentMeta, Story } from '@storybook/react'

import { StarRating, StarRatingProps } from './StarRatingDisplay'

export default {
  title: 'molecules/StarRatingDisplay',
} as ComponentMeta<typeof StarRating>

const Template: Story<StarRatingProps> = args => <StarRating {...args} />

export const FullStarsNormal = Template.bind({})
FullStarsNormal.args = {
  rating: 5,
  size: 'normal',
}

export const FullStarsMedium = Template.bind({})
FullStarsMedium.args = {
  rating: 5,
  size: 'medium',
}

export const FullStarsBig = Template.bind({})
FullStarsBig.args = {
  rating: 5,
  size: 'big',
}

export const ZeroStarsNormal = Template.bind({})
ZeroStarsNormal.args = {
  rating: 0,
  size: 'normal',
}

export const ZeroStarsMedium = Template.bind({})
ZeroStarsMedium.args = {
  rating: 0,
  size: 'medium',
}

export const ZeroStarsBig = Template.bind({})
ZeroStarsBig.args = {
  rating: 0,
  size: 'big',
}
