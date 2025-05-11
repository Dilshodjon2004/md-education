import React, { useEffect, useReducer } from 'react'
import { CoursePageComponentProps } from './course-page-component.props'
import styles from './course-page-component.module.css'
import {
	Advantages,
	Heading,
	HhData,
	Product,
	Sort,
	Tag,
	Text,
} from '@/components'
import { sortReducer } from './sort.reducer'
import { SortEnum } from '@/components/sort/sort.props'
import { AnimatePresence } from 'framer-motion'

const CoursePageComponent = ({
	page,
	products,
}: CoursePageComponentProps): JSX.Element => {
	const [state, dispatch] = useReducer(sortReducer, {
		sort: SortEnum.Rating,
		products: products,
	})

	const setSort = (sort: SortEnum) => {
		dispatch({ type: sort })
	}

	useEffect(() => {
		dispatch({ type: 'reset', initialState: products })
	}, [products])

	const spring = {
		type: 'spring',
		stiffness: 500,
		damping: 10,
	}

	const animations = {
		initial: { scale: 0 },
		animate: { scale: 1 },
		exit: { scale: 1 },
	}

	return (
		<div className={styles.wrapper}>
			{/* Title */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<Sort sort={state.sort} setSort={setSort} />
			</div>

			{/* Products */}
			<AnimatePresence>
				{state.products &&
					state.products.map((c, idx) => (
						<Product
							key={idx}
							layout
							transition={spring}
							{...animations}
							product={c}
						/>
					))}
			</AnimatePresence>

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
