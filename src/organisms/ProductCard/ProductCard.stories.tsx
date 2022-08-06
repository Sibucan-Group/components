import { ComponentMeta, Story } from '@storybook/react'
import { ProductCard, ProductCardProps } from './ProductCard'

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
  productName: 'Product name this is the product name',
  productPrice: 80.0,
  image: (
    <img
      src='/makeup-bag.jpg'
      alt='Product Example'
      width='250'
      height='176'
      style={{ objectFit: 'none' }}
    />
  ),
}

export const Favorite = Template.bind({})
Favorite.args = {
  ...Default.args,
  isFavorite: true,
}

export const Grid = TemplateGrid.bind({})
Grid.args = {
  ...Default.args,
}
