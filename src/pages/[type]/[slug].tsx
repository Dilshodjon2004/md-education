import { firstLevelMenu } from '@/helpers/constants'
import { IMenuItem } from '@/interfaces/menu.interface'
import { IPage } from '@/interfaces/page.interface'
import { IProduct } from '@/interfaces/product.interface'
import { withLayout } from '@/layout/layout'
import { CoursePageComponent } from '@/page-components'
import axios from 'axios'
import { GetServerSideProps } from 'next'

const Index = ({ products, page, firstCategory }: PageProps) => {
	return (
		<CoursePageComponent
			products={products}
			firstCategory={firstCategory}
			page={page}
		/>
	)
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
	query,
}) => {
	const { slug, type } = query
	if (!slug) {
		return {
			notFound: true,
		}
	}

	const firstCategoryItem = firstLevelMenu.find(m => m.route === type)

	if (!firstCategoryItem) {
		return {
			notFound: true,
		}
	}

	const { data: menu } = await axios.post<IMenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{ firstCategory: firstCategoryItem.id }
	)

	const { data: page } = await axios.get<IPage>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`
	)

	const { data: products } = await axios.post<IProduct[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
		{ category: slug }
	)

	return {
		props: { menu, page, products, firstCategory: firstCategoryItem.id },
	}
}

interface PageProps extends Record<string, unknown> {
	menu: IMenuItem[]
	page: IPage
	products: IProduct[]
	firstCategory: number
}
