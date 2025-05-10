import Navbar from '@/layout/navbar/navbar'
import styles from './home-page-component.module.css'
import { Button, Card, Heading, ScrollUp, Text } from '@/components'
import Image from 'next/image'
import { company, timeLineList } from '@/helpers/constants'
import { Fragment } from 'react'
import Footer from '@/layout/footer/footer'
import { Timeline, TimelineEvent } from 'react-event-timeline'
const HomePageComponent = () => {
	return (
		<div>
			<Navbar />
			<div className={styles.hero}>
				<div className={styles.heroTitle}>
					<Heading tag='h1'>
						Learn New Skills Online With Sammi <span>Academy</span>
					</Heading>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
						ratione voluptate, eos laborum ad placeat vel porro. Vel assumenda
						ut ad incidunt doloribus, eos sit veniam deleniti quae magnam quos.
					</Text>
					<Button className={styles.heroBtn} appearance='success' arrow='right'>
						Join For Free
					</Button>
				</div>
				<div className={styles.heroImage}>
					<Image src={'/hero.png'} alt='hero image' width={600} height={500} />
				</div>
			</div>
			<div className={styles.company}>
				<Heading tag='h3'>Trusted by the world's best</Heading>
				<div className={styles.companyIcon}>
					{company.map((icon, index) => (
						<Fragment key={index}>{icon}</Fragment>
					))}
				</div>
			</div>
			<div className={styles.timeline}>
				<Heading tag='h3'>What we can teach you ?</Heading>
				<div className={styles.timelineCard}>
					<Timeline lineColor='#dddddd'>
						{timeLineList.map(({ Icon, text, title }, index) => (
							<TimelineEvent
								key={index}
								title={title}
								icon={<Icon />}
								bubbleStyle={{
									borderColor: '#140342',
									backgroundColor: '#fff',
								}}
								contentStyle={{
									border: 'none',
									boxShadow: 'none',
									backgroundColor: 'transparent',
								}}
								titleStyle={{ fontSize: '20px' }}
							>
								<Card color='white' style={{ padding: 20 }}>
									<Text>{text}</Text>
								</Card>
							</TimelineEvent>
						))}
					</Timeline>
				</div>
				<div className={styles.mobileTimeline}>
					{timeLineList.map((data, idx) => (
						<Card
							color='white'
							key={idx}
							className={styles.card}
							style={{ padding: 20 }}
						>
							<Heading tag='h3'>{data.title}</Heading>
							<Text>{data.text}</Text>
						</Card>
					))}
				</div>
			</div>
			<ScrollUp />
			<Footer />
		</div>
	)
}

export default HomePageComponent
