'use client'
import { FC } from "react"
import { Typography } from "../../typography/view/Typography"
import classes from './NewCard.module.scss'
import { INewCard } from "../types/types"
import Link from "next/link"
import { CustomButton } from "../../button/view/CustomButton"
import Image from "next/image"

export const NewCard:FC<INewCard> = ({
	title,
	descriptions,
	date,
	img,
	variant,
	path
}) => {
	if (variant === 'mainCard') {
		return (
			// <Link href={'/'} className={classes.links}>
			<div className={classes.container}>
				<div className={classes.img}>
					<Image width={100} height={100} src={img} alt='' />
				</div>
				<div className={classes.content}>
				<Typography variant='h3' weight='medium'  className={classes.title}>
					{title}
				</Typography>
				<Typography variant='b1' weight='medium'  className={classes.text}>
					{descriptions}
				</Typography>
				<Typography variant='b1' weight='regular' className={classes.date}>
					{date}
				</Typography>
				</div>
			</div>
			// </Link>
		)
	}
	if (variant === 'pagesCard') {
		return (

			<div className={classes.containers}>
				<div className={classes.img}>
					<Image width={100} height={100} src={img} alt='' />
				</div>
				<div className={classes.content}>
					<Typography variant='h3' weight='medium' className={classes.title}>
						{title}
					</Typography>
					<Typography variant='b1' weight='medium' className={classes.text}>
						{descriptions}
					</Typography>
					<Typography variant='b1' weight='regular' className={classes.date}>
						{date}
					</Typography>
				</div>
				<CustomButton variant='tetriary' actionType='link' to={path} className={classes.btn}>
				<Typography variant={'b1'} weight={'medium'}>
					Подробнее
				</Typography>
				</CustomButton>
			</div>

		)
	}
}
