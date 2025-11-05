import { FC } from "react"
import { Typography } from "../../typography/view/Typography"
import classes from './EmployeesCard.module.scss'
import { IEmployees } from "../types/types"
import { CustomButton } from "../../button/view/CustomButton"
export const EmployeesCard: FC<IEmployees> = ({
  img,
  name,
  position,
  branch,
  variant
}) => {
		if (variant === 'director') {
			return (
				<div className={classes.containers}>
					<img src={img} alt={name} />
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
						<CustomButton variant={'primary'} actionType={'link'} to="consultation" className={classes.btn}>
							Записаться
						</CustomButton>
					</div>
				</div>
			)
		}
		if( variant === 'mainCard'){
			return (
				<div className={classes.mainCard}>
					<img src={img} alt={name} />
					<div className={classes.content}>
						<Typography variant='h3' weight='semiBold' truncate={20}>
							{name}
						</Typography>
						<Typography variant='b1' weight='medium'>
							{position}
						</Typography>
						<Typography variant='b2' weight='regular'>
							{branch}
						</Typography>
						<CustomButton variant={'primary'} actionType={'button'}>
							Записаться
						</CustomButton>
					</div>
				</div>
			)
		}
  if( variant === 'mainBlock'){
    return (
			<div className={classes.container}>
				<img src={img} alt={name} />
				<div className={classes.content}>
					<Typography variant='h3' weight='medium' truncate={20}>
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
