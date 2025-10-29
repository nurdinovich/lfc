import { useEffect, useRef } from 'react'

export const useClickOutside = <T extends HTMLElement>(
	handler: (event: MouseEvent) => void,
	delay: number = 0
) => {
	const ref = useRef<T | null>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				if (delay > 0) {
					setTimeout(() => handler(event), delay)
				} else {
					handler(event)
				}
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [handler, delay])

	return ref
}
