import { Typography } from '@/shared/ui'
import classes from './Adress.module.scss'
import { useMapAdress } from '@/shared/api/useMapAdress'
import { useWorks } from '@/shared/api/useWorks'

export const Adress = () => {
	const { data } = useMapAdress()
	const { data: grafic } = useWorks()

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
							<a
								href={`tel:${item.phone_number1}`}
								className={classes.phoneLink}
							>
								{item.phone_number1}
							</a>{' '}
							<strong>
								<a
									href={`tel:${item.phone_number2}`}
									className={classes.phoneLink}
								>
									{item.phone_number2}
								</a>
							</strong>
						</Typography>
					</div>
				))}
			</div>
			<div className={classes.grafic}>
				<Typography variant='b2' weight='regular'>
					График работы:
				</Typography>
				{grafic?.map((item, index) => (
					<div key={index}>
						<div className={classes.item}>
							<Typography variant='b2' weight='regular'>
								{item.working_days}
							</Typography>

							<Typography variant='b2' weight='regular'>
								{item.working_hours}
							</Typography>

							<Typography variant='b2' weight='regular'>
								{item.weekend}
							</Typography>

							<Typography variant='b2' weight='regular'>
								Выходной
							</Typography>
						</div>

						<div className={classes.content}>
							<div className={classes.item}>
								<Typography variant='b2' weight='regular'>
									{item.working_days}
								</Typography>
								<Typography variant='b2' weight='medium'>
									{item.weekend}
								</Typography>
							</div>

							<div className={classes.item}>
								<Typography variant='b2' weight='regular'>
									{item.working_hours}
								</Typography>
								<Typography variant='b2' weight='medium'>
									Выходной
								</Typography>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
