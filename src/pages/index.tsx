import {
	Button,
	Card,
	Heading,
	Input,
	Rating,
	Tag,
	Text,
	TextArea,
} from '@/components'
import { IMenuItem } from '@/interfaces/menu.interface'
import { withLayout } from '@/layout/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

const Index = ({ firstCategory, menu }: IHomeProps): JSX.Element => {
	const [isClick, setIsClick] = useState(false)
	const [rating, setRating] = useState<number>(3)

	console.log(menu)

	return (
		<>
			<Heading tag='h1'>Hello world! This is a test page.</Heading>
			<Text size='l'>Test text</Text>
			<Tag size='m' color='danger'>
				Tag
			</Tag>
			<br />
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button
				appearance='ghost'
				arrow={isClick ? 'down' : 'right'}
				onClick={() => setIsClick(prev => !prev)}
			>
				Arrow
			</Button>
			<Button appearance='primary' arrow='down'>
				Arrow Down
			</Button>
			<br />
			<Input placeholder='Enter ' />
			<TextArea placeholder='Enter text...' />
			<br />
			<Rating rating={rating} isEditable={true} setRating={setRating} />

			<br />
			<Card color='white'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid
				dolore adipisci? Totam optio quasi officia, quaerat consequatur dolores
				labore.
			</Card>
			<Card color='primary'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid
				dolore adipisci? Totam optio quasi officia, quaerat consequatur dolores
				labore.
			</Card>
		</>
	)
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<IMenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{
			firstCategory,
		}
	)
	return {
		props: {
			menu,
			firstCategory,
		},
	}
}

interface IHomeProps extends Record<string, unknown> {
	firstCategory: number
	menu: IMenuItem[]
}
