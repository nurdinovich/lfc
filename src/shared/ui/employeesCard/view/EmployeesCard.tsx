import { FC } from "react"
import { Typography } from "../../typography/view/Typography"
import classes from './EmployeesCard.module.scss'
import { IEmployees } from "../types/types"
export const EmployeesCard: FC<IEmployees> = ({
  img,
  name,
  position,
  branch,
  variant
}) => {
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
