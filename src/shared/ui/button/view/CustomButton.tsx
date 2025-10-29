import { FC } from 'react'
import styles from './CustomButton.module.scss'
import classNames from 'classnames'
import { ButtonProps } from '../types/types'
import Link from 'next/link'
import { Typography } from '../../typography/view/Typography'

export const CustomButton: FC<ButtonProps> = ({
	variant = 'none',
	children,
	actionType,
	className,
	onClick,
	type = 'button',
	disabled,
	isTextBtn = true,
	to = '#',
	target,
}) => {
	const classNamedGenerated = classNames(
		styles.general,
		styles[variant],
		disabled && styles.disabled,
		className
	)

	if (actionType === 'link' && to) {
		return (
			<Link href={to} className={classNamedGenerated} target={target}>
				{isTextBtn ? (
					<Typography variant={'buttonText'} weight={'semiBold'}>
						{children}
					</Typography>
				) : (
					children
				)}
			</Link>
		)
	}

	return (
		<button
			className={classNamedGenerated}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{isTextBtn ? (
				<Typography variant={'buttonText'} weight={'semiBold'}>
					{children}
				</Typography>
			) : (
				children
			)}
		</button>
	)
}
