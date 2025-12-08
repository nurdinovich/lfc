'use client'
import classNames from 'classnames'
import styles from './Typography.module.scss'
import { FC, JSX, ReactNode } from 'react'
import { TTypographyProps, TVariants } from '../types/types'

export const Typography: FC<TTypographyProps> = props => {
	const { onClick, variant, className, color, children, weight, truncate } =
		props
	const Tags: Record<TVariants, keyof JSX.IntrinsicElements> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		b1: 'p',
		b2: 'p',
		bodyText: 'p',
    buttonText: 'p'
	}

	const classNamedGenerated = classNames(
		styles[variant],
		styles[color || ''],
		styles[weight],
		className
	)

	const TagName = Tags[variant]

	const truncateString = (str: ReactNode, maxLength: number): ReactNode => {
		if (typeof str === 'string') {
			const temp = str.replace(/<[^>]+>/g, '')
			const truncated =
				temp.length <= maxLength ? temp : temp.slice(0, maxLength) + '...'
			return truncated
		}

		return str
	}

	return (
		<TagName onClick={onClick} className={classNamedGenerated}>
			{truncate ? truncateString(children, truncate) : children}
		</TagName>
	)
}
