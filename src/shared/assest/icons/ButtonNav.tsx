import { IIcons } from "@/shared/types/globalTypes"
import { FC } from "react"

export const ButtonNav:FC<IIcons> = ({
  
}) => {
  return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9 18L15 12L9 6'
				stroke='#0D1B2A'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
