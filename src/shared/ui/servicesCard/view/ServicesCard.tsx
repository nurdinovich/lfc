import { FC } from 'react'
import { Typography } from '../../typography/view/Typography'
import classes from './ServicesCard.module.scss'
import { CheckMark } from '@/shared/assest/icons'
import { IServices } from '../types/types'

export const ServicesCard: FC<IServices> = ({
	variant,
	title,
	descriptions,
}) => {
	if (variant === 'mainCard') {
		return (
			<div className={classes.container}>
				<div className={classes.item}>
					<Typography variant='h3' weight='semiBold' className={classes.title}>
						{title}
					</Typography>

					<hr className={classes.line} />
					{descriptions.map((desc, i) => (
						<div key={i} className={classes.descItem}>
							<div className={classes.checkMark}>
								<CheckMark />
							</div>
							<Typography variant='b2' weight='medium' className={classes.text}>
								{desc}
							</Typography>
						</div>
					))}
				</div>
			</div>
		)
	}

	if (variant === 'pagesCard') {
		return (
			<div className={classes.containers}>
				<div className={classes.item}>
					<Typography variant='h3' weight='semiBold' className={classes.title}>
						{title}
					</Typography>
					<hr className={classes.line} />
					{descriptions.map((desc, i) => (
						<div key={i} className={classes.descItem}>
							<div className={classes.checkMark}>
								<CheckMark />
							</div>
							<Typography variant='b2' weight='medium' className={classes.text}>
								{desc}
							</Typography>
						</div>
					))}
				</div>
			</div>
		)
	}
}
