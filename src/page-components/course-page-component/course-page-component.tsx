import React from 'react'
import { CoursePageComponentProps } from './course-page-component.props'
import styles from './course-page-component.module.css'
import cn from 'classnames'
import { Advantages, Heading, HhData, Tag, Text } from '@/components'

const CoursePageComponent = ({
	firstCategory,
	page,
	products,
}: CoursePageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			{/* Title */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<div>Sort...</div>
			</div>

			{/* Products */}
			<div>Products</div>

			{/* Vacations */}
			<div className={styles.hhTitle}>
				<Heading tag='h2'>Vacations - {page.category}</Heading>
				<Tag color='danger' size='m'>
					hh.uz
				</Tag>
			</div>

			{/* HHDATA */}
			{page.hh && <HhData {...page.hh} />}

			{/* Advantages */}
			{page.advantages && page.advantages.length && (
				<>
					<Heading tag='h2'>Advantages</Heading>
					<Advantages advantages={page.advantages} />
				</>
			)}

			{/* Description */}
			<Text>{page.description}</Text>

			{/* Skills */}
			<Heading tag='h2'>Skills</Heading>
			{page.tags.length &&
				page.tags.map(tag => (
					<Tag color='primary' key={tag}>
						{tag}
					</Tag>
				))}
		</div>
	)
}

export default CoursePageComponent
