import { HeaderProps } from './header.props'
import styles from './header.module.css'
import cn from 'classnames'
import LogoIcon from '../logo.svg'
import { IconButton } from '@/components'
import { useState } from 'react'
import Sidebar from '../sidebar/sidebar'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const variants = {
		visible: { opacity: 1, x: 0, transition: { stiffnes: 20 } },
		hidden: { opacity: 1, x: '100%' },
	}
	return (
		<div className={cn(className, styles.header)} {...props}>
			<Link href={'/'}>
				<LogoIcon />
			</Link>
			<IconButton appearance='white' icon='menu' onClick={toggleMenu} />
			<motion.div
				variants={variants}
				initial={'hidden'}
				animate={isOpen ? 'visible' : 'hidden'}
				className={styles.mobileMenu}
			>
				<Sidebar />
				<IconButton
					icon={'close'}
					onClick={toggleMenu}
					appearance='primary'
					className={styles.closeIcon}
				/>
			</motion.div>
		</div>
	)
}

export default Header
