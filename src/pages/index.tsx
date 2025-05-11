import { IMenuItem } from '@/interfaces/menu.interface'
import { withLayout } from '@/layout/layout'
import { HomePageComponent } from '@/page-components'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'

const Index = () => {
	return <HomePageComponent />
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<
	HomePageProps
> = async () => {
	const { data: menu } = await axios.post<IMenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{ firstCategory: 0 }
	)

	return {
		props: {
			menu,
		},
	}
}

interface HomePageProps {
	menu: IMenuItem[]
}
