import { Typography } from "@/shared/ui"
import classes from './Adress.module.scss'
import { useMapAdress } from "@/shared/api/useMapAdress"
import { useWorks } from "@/shared/api/useWorks"

export const Adress = () => {
  const {data} = useMapAdress()
  const {data: grafic} = useWorks()
  return (
		<div className={classes.adress}>
			<div className={classes.container}>
				{data?.map((item, index) => (
					<div key={index} className={classes.item}>
						<Typography variant='b2' weight='regular'>
							{item.contact_translations[0].city}{' '}
							<strong>{item.contact_translations[0].address}</strong>
						</Typography>
						<Typography variant='b2' weight='regular'>
							{item.phone_number1} <strong>{item.phone_number2}</strong>
						</Typography>
					</div>
				))}
			</div>
			<div className={classes.grafic}>
				<Typography variant='b2' weight='regular'>
					График работы:
				</Typography>
				{grafic?.map((item, index) => (
					<div key={index} className={classes.item}>
						<Typography variant='b2' weight='regular'>
							{item.working_days}
						</Typography>

						<Typography variant='b2' weight='regular'>
							{item.working_hours}
						</Typography>
						<Typography variant='bodyText' weight='bold'>
							{item.weekend}
						</Typography>
						<Typography variant='bodyText' weight='regular'>
							Выходной
						</Typography>
					</div>
				))}
			</div>
		</div>
	)
}
