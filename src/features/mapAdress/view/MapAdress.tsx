'use client'
import { FC, useEffect, useState } from 'react'
import { Typography } from '@/shared/ui'
import classes from './MapAdress.module.scss'
import { MapPin, Phone } from '@/shared/assest/icons'
import { useWorks } from '@/shared/api/useWorks'
import { useMapAdress } from '@/shared/api/useMapAdress'

interface ILocation {
	city: string
	adress: string
	phone: string[]
	iframeSrc: string
}

export const MapAdress: FC = () => {
	const { data } = useWorks()
	const { data: contacts } = useMapAdress()

	const [locations, setLocations] = useState<ILocation[]>([])
	const [activeIframe, setActiveIframe] = useState<string>('')

	useEffect(() => {
		if (!contacts || !contacts[0]) return

		const locs: ILocation[] = [
			{
				city: 'г. Бишкек',
				adress: 'улица Фрунзе, 387. 2 этаж',
				phone: ['0771 669 436', '0553 330 123'],
				iframeSrc: contacts[0].maps,
			},
			{
				city: 'г. Ош',
				adress: 'улица Курманжан датка, 287',
				phone: ['0557 287 282', '0502 519 951'],
				iframeSrc: contacts[1].maps,
			},
		]

		setLocations(locs)
		setActiveIframe(locs[0].iframeSrc)
	}, [contacts])

	const iframeSrc = activeIframe

	return (
		<div className={classes.wrapper}>
			<div className={classes.map}>
				{iframeSrc && (
					<iframe src={iframeSrc} width='100%' height='100%' loading='lazy' />
				)}
			</div>

			<div className={classes.sidePanel}>
				<div className={classes.locations}>
					{locations.map((loc: ILocation, index: number) => (
						<div
							key={index}
							className={`${classes.locationCard} ${
								activeIframe === loc.iframeSrc ? classes.active : ''
							}`}
							onClick={() => setActiveIframe(loc.iframeSrc)}
						>
							<div className={classes.address}>
								<MapPin className={classes.icon} />
								<div className={classes.addressSection}>
									<Typography
										variant='b1'
										weight='bold'
										className={classes.city}
									>
										{loc.city}
									</Typography>
									<Typography variant='bodyText' weight='medium'>
										{loc.adress}
									</Typography>
								</div>
							</div>

							<div className={classes.phoneSection}>
								<Phone className={classes.icon} />
								<div className={classes.phones}>
									{loc.phone.map((phoneNumber: string, i: number) => (
										<Typography
											key={i}
											variant='bodyText'
											weight='medium'
											className={classes.phone}
										>
											{phoneNumber}
										</Typography>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={classes.workHours}>
				<Typography variant='b1' weight='bold' className={classes.hoursTitle}>
					График работы
				</Typography>

				<div className={classes.hoursGrid}>
					<div className={classes.days}>
						<Typography variant='bodyText' weight='bold'>
							{data?.[0]?.working_days}
						</Typography>
						<Typography variant='bodyText' weight='bold'>
							{data?.[0]?.weekend}
						</Typography>
					</div>

					<div className={classes.times}>
						<Typography variant='bodyText' weight='regular'>
							{data?.[0]?.working_hours}
						</Typography>
						<Typography variant='bodyText' weight='regular'>
							Выходной
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}
