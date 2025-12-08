'use client'
import { FC } from 'react'
import styles from './MultiContainer.module.scss'
import { ContainerProps } from '../types/types'

export const MultiContainer: FC<ContainerProps> = ({
	children,
	className = '',
}) => {
	return <div className={`${styles.container}  ${className}`}>{children}</div>
}
