export interface IIcons {
	width?: number
	height?: number
	color?: string
	className?: string
	stroke?: string
}

export interface ISetting {
	id: number
	instagram: string
	facebook: string
	email: string
	logo: string
}
export interface IBreadCrumbItem {
	key?: string
	label: string
	route?: string | null
	class?: string
}

export interface IThirdBread {
	text: string
	route: string
}