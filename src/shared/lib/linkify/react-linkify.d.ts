declare module 'react-linkify' {
	import { ComponentType } from 'react'

	interface LinkifyProps {
		componentDecorator?: (
			href: string,
			text: string,
			key: number
		) => JSX.Element
		properties?: React.AnchorHTMLAttributes<HTMLAnchorElement>
		children?: React.ReactNode
	}

	const Linkify: ComponentType<LinkifyProps>

	export default Linkify
}
