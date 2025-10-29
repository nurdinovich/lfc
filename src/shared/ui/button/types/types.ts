import { ReactNode } from 'react'

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'tetriary'
	actionType: 'button' | 'link'
	children?: ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit'
	disabled?: boolean
	isTextBtn?: boolean
	to?: string
	target?: '_blank' | '_self' | '_top' | '_parent'
}
