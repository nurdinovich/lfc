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
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6151121576104!2d74.6217764537743!3d42.880967271151114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7bd9610662d%3A0xad6bdbfccaaefff4!2zMzg3INGD0LvQuNGG0LAg0KTRgNGD0L3Qt9C1LCDQkdC40YjQutC10LogNzIwMDAx!5e0!3m2!1sru!2skg!4v1761757351914!5m2!1sru!2skg',
	},
	{
		city: 'г. Ош',
		adress: 'улица Курманжан датка, 287',
		phone: ['0557 287 282', '0502 519 951'],
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.11599096996554!2d72.79776595260212!3d40.52545009176567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac194d75d439%3A0x56016ec06aae8206!2zItCU0J7QodCi0KPQmiIg0JzRg9C20YHQutC-0LUg0YHRgtGD0LTQtdC90YfQtdGB0LrQvtC1INC-0LHRiNC10LbQuNGC0LjQtSDQtNC70Y8u!5e0!3m2!1sru!2skg!4v1761757570448!5m2!1sru!2skg',
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
				<Typography variant='b1' weight='bold' className={classes.hoursTitle}>
					График работы
				</Typography>
				<div className={classes.hoursGrid}>
					<div className={classes.days}>
						<Typography variant='bodyText' weight='bold'>
							Пн - Пт
						</Typography>
						<Typography variant='bodyText' weight='bold'>
							Сб - Вс
						</Typography>
					</div>
					<div className={classes.times}>
						<Typography variant='bodyText' weight='regular'>
							09:00 — 18:00
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
