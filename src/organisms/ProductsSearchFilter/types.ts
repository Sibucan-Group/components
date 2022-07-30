import { SOption } from '../../atoms/Select'

export interface Category extends SOption {
  department?: number // ForeignKey (number | Department)
  subcategory?: number // OneToManyRelation (number[] | Subcategory[])
}

export interface SubCategory extends SOption {
  meta: string
  category?: number // ForeignKey (number | Category)
}

export interface Department extends SOption {
  category?: number[] // OneToManyRelation (number[] | Category[])
}
