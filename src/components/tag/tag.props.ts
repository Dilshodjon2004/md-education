import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm'
	color?: 'danger' | 'success' | 'primary'
	children: ReactNode
}
