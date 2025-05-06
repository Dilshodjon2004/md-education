import { ReactNode } from 'react'

export interface TagProps {
	size?: 's' | 'm'
	color?: 'danger' | 'success' | 'primary'
	children: ReactNode
}
