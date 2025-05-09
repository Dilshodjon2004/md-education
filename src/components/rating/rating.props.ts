import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface RatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	rating: number
	isEditable?: boolean
	error?: FieldError
	setRating?: (rating: number) => void
}
