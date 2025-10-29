import { ReactNode } from "react";

export interface ISlider {
	children: ReactNode
	className?: string
	spaceBetween: number
	slidesPerView: number
	variant?: string
}