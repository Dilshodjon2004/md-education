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
import { useState } from 'react'

const Index = () => {
	const [isClick, setIsClick] = useState(false)
	const [rating, setRating] = useState<number>(3)
	return (
		<div>
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
			<Card color='white' >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid
				dolore adipisci? Totam optio quasi officia, quaerat consequatur dolores
				labore.
			</Card>
			<Card color='primary' >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid
				dolore adipisci? Totam optio quasi officia, quaerat consequatur dolores
				labore.
			</Card>
		</div>
	)
}

export default Index
