import { CardProps } from './card.props'
import styles from './card.module.css'
import cn from 'classnames'

const Card = ({
	children,
	color,
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div
			className={cn(styles.card, {
				[styles.primary]: color === 'primary',
				[styles.white]: color === 'white',
			})}
			{...props}
		>
			{children}
		</div>
	)
}

export default Card
