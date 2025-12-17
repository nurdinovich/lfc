'use client'

import { motion, type Variants } from 'framer-motion'
import type { FC, ReactNode } from 'react'

export type AnimationType =
	| 'slideUp'
	| 'slideDown'
	| 'slideRight'
	| 'slideLeft'
	| 'none'

export interface AnimatedBlockProps {
	children: ReactNode
	delay?: number
	animationType?: AnimationType
	className?: string
	duration?: number
	once?: boolean
	amount?: number
}

const variantsMap: Record<AnimationType, Variants> = {
	slideUp: {
		initial: { opacity: 0, y: 100 },
		whileInView: { opacity: 1, y: 0 },
	},
	slideDown: {
		initial: { opacity: 0, y: -100 },
		whileInView: { opacity: 1, y: 0 },
	},
	slideRight: {
		initial: { opacity: 0, x: 100 },
		whileInView: { opacity: 1, x: 0 },
	},
	slideLeft: {
		initial: { opacity: 0, x: -100 },
		whileInView: { opacity: 1, x: 0 },
	},
	none: {
		initial: {},
		whileInView: {},
	},
}

export const AnimatedBlock: FC<AnimatedBlockProps> = ({
	children,
	delay = 0,
	duration = 0.5,
	animationType = 'none',
	className,
	once = true,
	amount = 0.1,
}) => {
	const v = variantsMap[animationType]

	return (
		<motion.div
			initial='initial'
			whileInView='whileInView'
			variants={v}
			transition={{ duration, delay }}
			viewport={{ once, amount }}
			className={className}
		>
			{children}
		</motion.div>
	)
}
