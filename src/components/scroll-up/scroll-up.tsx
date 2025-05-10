import React from 'react'
import styles from './scroll-up.module.css'
import { motion } from 'framer-motion'
import { useScrollY } from '@/hooks/useScrollY'
import IconButton from '../icon-button/icon-button'
const ScrollUp = () => {
	const scrollY = useScrollY()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		scrollY > 200 && (
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
				exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
				whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
				className={styles.scrollUp}
				onClick={scrollToTop}
			>
				<IconButton icon='up' appearance='primary' onClick={scrollToTop} />
			</motion.div>
		)
	)
}

export default ScrollUp
