'use client'

import React from 'react'
import styles from './TimeSlots.module.scss'
import { Typography } from '@/shared/ui'
import { Time } from '@/shared/assest/icons'

interface TimeSlotsProps {
	selectedTime: string
	onTimeSelect: (time: string) => void
	availableTimes: string[]
	unavailableTimes: string[]
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
	selectedTime,
	onTimeSelect,
	availableTimes,
	unavailableTimes,
}) => {
	const allTimes = Array.from(
		new Set([...availableTimes, ...unavailableTimes])
	).sort((a, b) => a.localeCompare(b))

	const timeSlots = allTimes.map(time => ({
		time,
		available: !unavailableTimes.includes(time),
	}))

	return (
		<div className={styles.timeSlots}>
			<Typography
				variant='b1'
				weight='semiBold'
				className={styles.timeSlotsTitle}
			>
				Свободные окна
				<Time />
			</Typography>

			<hr />

			<Typography
				variant='bodyText'
				weight='medium'
				className={styles.timeSlotsNote}
			>
				Занятые окна отображаются серым цветом
			</Typography>

			{timeSlots.length === 0 ? (
				<Typography variant='b2' weight='regular' className={styles.noSlots}>
					На выбранную дату нет доступных временных слотов
				</Typography>
			) : (
				<div className={styles.slotsList}>
					{timeSlots.map(slot => (
						<div
							key={slot.time}
							className={`${styles.timeSlot} ${
								!slot.available ? styles.unavailable : ''
							} ${selectedTime === slot.time ? styles.selected : ''}`}
							onClick={() => slot.available && onTimeSelect(slot.time)}
						>
							<Typography variant='buttonText' weight='medium'>
								{slot.time}
							</Typography>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default TimeSlots
