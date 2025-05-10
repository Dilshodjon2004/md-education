import cn from 'classnames'
import ArrowIcon from './arrow.svg'
import styles from './button.module.css'
import { ButtonProps } from './button.prop'

const Button = ({
	arrow = 'none',
	appearance = 'primary',
	size,
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
				[styles.failure]: appearance === 'failure',
				[styles.success]: appearance === 'success',
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			})}
			{...props}
		>
			{children}

			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
						[styles.right]: arrow === 'right',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	)
}

export default Button
