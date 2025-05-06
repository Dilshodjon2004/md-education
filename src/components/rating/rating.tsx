import { RatingProps } from './rating.props'
import styles from './rating.module.css'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import StarIcon from './star.svg'

const Rating = ({
	rating,
	isEditable = false,
	setRating,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<>*</>)
	)

	useEffect(() => {
		renderRating(rating)
	}, [rating])

	const renderRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, id: number) => (
			<span
				className={cn(styles.star, {
					[styles.filled]: id < currentRating,
					[styles.editable]: isEditable,
				})}
				onMouseEnter={() => changeRatingDisplay(id + 1)}
				onMouseLeave={() => renderRating(rating)}
				onClick={() => clickRatingHandler(id + 1)}
			>
				<StarIcon />
			</span>
		))

		setRatingArray(updatedArray)
	}

	const changeRatingDisplay = (id: number) => {
		if (!isEditable) return

		renderRating(id)
	}

	const clickRatingHandler = (id: number) => {
		if (!isEditable || !setRating) return

		setRating(id)
	}

	return (
		<div className={styles.rating} {...props}>
			{ratingArray.map((rating, id) => (
				<span key={id}>{rating}</span>
			))}
		</div>
	)
}

export default Rating
