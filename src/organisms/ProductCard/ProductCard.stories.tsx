import { ComponentMeta, Story } from '@storybook/react'

import { ProductCard, ProductCardProps } from './ProductCard'
import makeupBagImg from './images/makeup-bag.jpg'

export default {
  title: 'organisms/ProductCard',
} as ComponentMeta<typeof ProductCard>

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

const TemplateGrid: Story<ProductCardProps> = args => (
  <div className='mx-auto max-w-5xl'>
    <div className='grid grid-cols-4 gap-8'>
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
      <ProductCard {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Product name this is the product name',
  price: 80.0,
  addToCartText: 'Add to cart',
  image: (
    <img
      src={makeupBagImg}
      alt='Product Example'
      width='250'
      height='176'
      style={{ objectFit: 'none' }}
    />
  ),
}

export const Grid = TemplateGrid.bind({})
Grid.args = {
  ...Default.args,
}
