import { Heading, Tag, Text } from '@/components'

const Index = () => {
	return (
		<div>
			<Heading tag='h1'>Hello world! This is a test page.</Heading>
			<Text size='l'>Test text</Text>
			<Tag size='m' color='danger'>
				Tag
			</Tag>
		</div>
	)
}

export default Index
