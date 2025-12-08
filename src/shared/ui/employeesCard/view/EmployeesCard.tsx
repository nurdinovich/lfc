'use client'
import { FC } from "react"
import { Typography } from "../../typography/view/Typography"
import classes from './EmployeesCard.module.scss'
import { IEmployees } from "../types/types"
import { CustomButton } from "../../button/view/CustomButton"
import Image from "next/image"
import { useSafeTranslation } from "@/shared/hooks/useSafeTranslation"
export const EmployeesCard: FC<IEmployees> = ({
	image,
	name,
	position,
	branch,
	alt,
	variant,
	onClick,
}) => {
	const { t } = useSafeTranslation()
	if (variant === 'director') {
		return (
			<div className={classes.containers}>
				<Image width={610} height={884} src={image} alt={alt} />
				<div className={classes.content}>
					<Typography variant='h2' weight='bold' truncate={20}>
						{name}
					</Typography>
					<Typography variant='b1' weight='regular'>
						{position}
					</Typography>
					<Typography variant='b2' weight='regular'>
						{branch}
					</Typography>
					<CustomButton
						variant={'primary'}
						actionType={'button'}
						onClick={onClick}
						className={classes.btn}
					>
						{t('buttons.books')}
					</CustomButton>
				</div>
			</div>
		)
	}
	if (variant === 'mainCard') {
		return (
			<div className={classes.mainCard}>
				<Image width={295} height={432} src={image} alt={alt} />
				<div className={classes.content}>
					<Typography variant='h3' weight='semiBold' className={classes.name}>
						{name}
					</Typography>
					<Typography variant='b1' weight='medium'>
						{position}
					</Typography>
					<Typography variant='b2' weight='regular'>
						{branch}
					</Typography>
					<CustomButton
						variant={'primary'}
						actionType={'button'}
						onClick={onClick}
					>
						{t('buttons.books')}
					</CustomButton>
				</div>
			</div>
		)
	}
	if (variant === 'mainBlock') {
		return (
			<div className={classes.container}>
				<Image
					width={295}
					height={432}
					src={image}
					alt={alt}
					style={{ width: '100%', height: '100%' }}
				/>
				<div className={classes.content}>
					<Typography
						variant='h3'
						weight='medium'
						truncate={15}
						className={classes.name}
					>
						{name}
					</Typography>
					<Typography variant='b1' weight='regular'>
						{position}
					</Typography>
					<Typography variant='b2' weight='regular'>
						{branch}
					</Typography>
				</div>
			</div>
		)
	}
}
