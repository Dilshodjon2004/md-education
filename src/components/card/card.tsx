import { CardProps } from './card.props'
import styles from './card.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

const Card = forwardRef(
	(
		{ children, color = 'primary', className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		return (
			<div
				className={cn(styles.card, className, {
					[styles.primary]: color === 'primary',
					[styles.white]: color === 'white',
				})}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		)
	}
)
export default Card
