import cn from 'classnames'
import ArrowIcon from './arrow.svg'
import styles from './button.module.css'
import { ButtonProps } from './button.prop'

const Button = ({
	arrow = 'none',
	appearance = 'primary',
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}

			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	)
}

export default Button
