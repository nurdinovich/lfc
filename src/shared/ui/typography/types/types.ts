import { ReactNode } from 'react'

export type TVariants =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'b1'
	| 'b2'
	| 'bodyText'
  | 'buttonText'
export type TColors = 'black' | 'white' | 'green' | 'grey'
export type TWeights = 'medium' | 'semiBold' | 'bold' | 'regular'

export interface TTypographyProps {
	onClick?: () => void
	variant: TVariants
	className?: string
	color?: TColors
	children: ReactNode
	weight: TWeights
	truncate?: number
}
