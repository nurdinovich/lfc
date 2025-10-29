import { IIcons } from "@/shared/types/globalTypes"
import { FC } from "react"


export const CheckMark:FC<IIcons> = ({
  
}) => {
  return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_20_984)'>
				<path
					d='M21 0.75L7.05 16.0875L3 13.0125H0.75L7.05 23.25L23.25 0.75H21Z'
					fill='#1C1C1C'
				/>
			</g>
			<defs>
				<clipPath id='clip0_20_984'>
					<rect width='24' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
