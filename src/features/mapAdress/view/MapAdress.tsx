'use client'
import { FC, useState } from 'react'
import { Typography } from '@/shared/ui'
import classes from './MapAdress.module.scss'
import { MapPin, Phone } from '@/shared/assest/icons'

interface ILocation {
	city: string
	adress: string
	phone: string[]
	iframeSrc: string
}

const locations: ILocation[] = [
	{
		city: 'г. Бишкек',
		adress: 'улица Фрунзе, 387. 2 этаж',
		phone: ['0771 669 436', '0553 330 123'],
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2444018442797!2d-74.2480208237285!3d40.69602407138762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bff86cb2e74d%3A0xfad77fdf41bbec88!2s1441%20Morris%20Ave%2C%20Union%2C%20NJ%2007083%2C%20USA!5e0!3m2!1sen!2s!4v1694123456789',
	},
	{
		city: 'г. Ош',
		adress: 'улица Курманжан датка, 287',
		phone: ['0557 287 282', '0502 519 951'],
		iframeSrc:
			'https://2gis.kg/osh/firm/70000001080587549/center/73.3844,40.5137/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap',
	},
]

export const MapAdress: FC = () => {
	const [activeIframe, setActiveIframe] = useState(locations[0].iframeSrc)

	return (
		<div className={classes.wrapper}>
			<div className={classes.map}>
				<iframe
					src={activeIframe}
					width='100%'
					height='100%'
					loading='lazy'
					title='2GIS Map'
				></iframe>
			</div>

			<div className={classes.sidePanel}>
				<div className={classes.locations}>
					{locations.map((loc, index) => (
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
							<Typography variant='b1' weight='bold' className={classes.city}>
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
									{loc.phone.map((phoneNumber, i) => (
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
					<Typography variant='b1'  weight='bold' className={classes.hoursTitle}>
						График работы
					</Typography>
					<div className={classes.hoursGrid}>
						<div className={classes.days}>
							<Typography variant='bodyText' weight='bold'>Пн - Пт</Typography>
							<Typography variant='bodyText' weight='bold'>Сб - Вс</Typography>
						</div>
						<div className={classes.times}>
							<Typography variant='bodyText' weight='regular'>09:00 — 18:00</Typography>
							<Typography variant='bodyText' weight='regular'>Выходной</Typography>
						</div>
					</div>
				</div>
		</div>
	)
}
