import { IMenuItem } from '@/interfaces/menu.interface'
import { IPage } from '@/interfaces/page.interface'
import { IProduct } from '@/interfaces/product.interface'
import { withLayout } from '@/layout/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'

const Index = ({ menu, page, products }: PageProps) => {
	return <div>{products.length}</div>
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
	query,
}) => {
	const { slug } = query
	const firstCategory = 0
	if (!slug) {
		return {
			notFound: true,
		}
	}

	const { data: menu } = await axios.post<IMenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{ firstCategory }
	)

	const { data: page } = await axios.get<IPage>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`
	)

	const { data: products } = await axios.post<IProduct[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
		{ category: slug }
	)

	return {
		props: { menu, page, products },
	}
}

interface PageProps extends Record<string, unknown> {
	menu: IMenuItem[]
	page: IPage
	products: IProduct[]
}
