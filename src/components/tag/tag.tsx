import { TagProps } from './tag.props'
import styles from './tag.module.css'
import cn from 'classnames'

const Tag = ({
	size = 'm',
	color = 'primary',
	children,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.primary]: color === 'primary',
				[styles.success]: color === 'success',
				[styles.danger]: color === 'danger',
			})}
			{...props}
		>
			{children}
		</div>
	)
}

export default Tag
