'use client'

import { FC, useEffect, useMemo, useState } from 'react'
import { Typography } from '@/shared/ui'
import classes from './MapAdress.module.scss'
import { MapPin, Phone } from '@/shared/assest/icons'
import { useWorks } from '@/shared/api/useWorks'
import { useMapAdress } from '@/shared/api/useMapAdress'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

type Contact = {
	id: number
	maps: string
	phone_number1?: string
	phone_number2?: string
	contact_translations?: Array<{
		city?: string
		address?: string
		language_id?: number
	}>
}

export const MapAdress: FC = () => {
	const { data } = useWorks()
	const { data: contactsRaw } = useMapAdress()
	const { t } = useSafeTranslation()

	// ✅ ВСЕГДА: id=1 первым, id=2 вторым (и т.д.)
	const contacts = useMemo(() => {
		return ((contactsRaw ?? []) as Contact[])
			.map(c => ({ ...c, id: Number((c as any).id) }))
			.sort((a, b) => a.id - b.id)
	}, [contactsRaw])

	const [activeId, setActiveId] = useState<number | null>(null)

	useEffect(() => {
		if (!contacts.length) return
		setActiveId(prev => (prev === null ? contacts[0].id : prev))
	}, [contacts])

	const activeContact = useMemo(() => {
		return contacts.find(c => c.id === activeId) ?? contacts[0]
	}, [contacts, activeId])

	const iframeSrc = activeContact?.maps ?? ''

	return (
		<div className={classes.wrapper}>
			<div className={classes.map}>
				{iframeSrc && (
					<iframe
						// ✅ важно, чтобы карта точно переключалась
						key={iframeSrc}
						src={iframeSrc}
						width='100%'
						height='100%'
						loading='lazy'
						title='Карта офиса LFC'
						aria-label='Карта офиса LFC'
					/>
				)}
			</div>

			<div className={classes.sidePanel}>
				<div className={classes.locations}>
					{contacts.map(c => {
						const tr = c.contact_translations?.[0]
						const phones = [c.phone_number1, c.phone_number2].filter(
							Boolean
						) as string[]
						const isActive = c.id === activeId

						return (
							<div
								key={c.id}
								className={`${classes.locationCard} ${
									isActive ? classes.active : ''
								}`}
								onClick={() => setActiveId(c.id)}
								role='button'
								tabIndex={0}
							>
								<div className={classes.address}>
									<MapPin className={classes.icon} />
									<div className={classes.addressSection}>
										<Typography
											variant='b1'
											weight='bold'
											className={classes.city}
										>
											{tr?.city ?? ''}
										</Typography>
										<Typography variant='bodyText' weight='medium'>
											{tr?.address ?? ''}
										</Typography>
									</div>
								</div>

								<div className={classes.phoneSection}>
									<Phone className={classes.icon} />
									<div className={classes.phones}>
										{phones.map((p, i) => (
											<Typography
												key={i}
												variant='bodyText'
												weight='medium'
												className={classes.phone}
											>
												{p}
											</Typography>
										))}
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<div className={classes.workHours}>
				<Typography variant='b1' weight='bold' className={classes.hoursTitle}>
					{t('buttons.grafic')}
				</Typography>

				<div className={classes.hoursGrid}>
					<div className={classes.days}>
						<Typography
							variant='bodyText'
							weight='medium'
							className={classes.day}
						>
							{data?.[0]?.working_days}
						</Typography>
						<Typography
							variant='bodyText'
							weight='medium'
							className={classes.day}
						>
							{data?.[0]?.weekend}
						</Typography>
					</div>

					<div className={classes.times}>
						<Typography
							variant='bodyText'
							weight='regular'
							className={classes.day}
						>
							{data?.[0]?.working_hours}
						</Typography>
						<Typography
							variant='bodyText'
							weight='regular'
							className={classes.day}
						>
							{t('buttons.dayof')}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	)
}
