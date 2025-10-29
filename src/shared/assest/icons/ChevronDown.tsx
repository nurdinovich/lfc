import { IIcons } from '@/shared/types/globalTypes'
import { FC } from 'react'

export const ChevronDown:FC<IIcons> = ({
className
}) => {
  return (
		<svg
			width='24'
			height='24'
			className={className}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6 9L12 15L18 9'
				stroke='#ffffff'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
