import { firstLevelMenu } from '@/helpers/constants'
import { IMenuItem } from '@/interfaces/menu.interface'
import { withLayout } from '@/layout/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'

const Type = () => {
	return <div>Type</div>
}

export default withLayout(Type)

export const getServerSideProps: GetServerSideProps<ITypeProps> = async ({
	query,
}) => {
	const { type } = query

	if (!type) {
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

	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id,
		},
	}
}

interface ITypeProps extends Record<string, unknown> {
	menu: IMenuItem[]
	firstCategory: number
}
