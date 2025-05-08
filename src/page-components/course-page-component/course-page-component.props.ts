import { IPage, PageCategory } from '@/interfaces/page.interface'
import { IProduct } from '@/interfaces/product.interface'

export interface CoursePageComponentProps {
	firstCategory: PageCategory
	page: IPage
	products: IProduct[]
}
