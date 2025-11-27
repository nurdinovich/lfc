'use client'
import styles from './TimeSlots.module.scss'
import { Typography } from '@/shared/ui'
import { Time } from '@/shared/assest/icons'

interface TimeSlotsProps {
	selectedTime: string
	onTimeSelect: (time: string) => void
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
	selectedTime,
	onTimeSelect,
}) => {
	const timeSlots = [
		{ start: '10:00', end: '10:00', available: true },
		{ start: '11:00', end: '11:00', available: true },
		{ start: '12:00', end: '12:00', available: false },
		{ start: '13:00', end: '13:00', available: true },
		{ start: '14:00', end: '14:00', available: false },
		{ start: '15:00', end: '14:00', available: true },
		{ start: '16:00', end: '14:00', available: true },
		{ start: '17:00', end: '14:00', available: true },
	]

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
				variant={'bodyText'}
				weight={'medium'}
				className={styles.timeSlotsNote}
			>
				Занятые окна отображаются серым цветом
			</Typography>
			<div className={styles.slotsList}>
				{timeSlots.map((slot, index) => (
					<div
						key={index}
						className={`${styles.timeSlot} ${
							!slot.available ? styles.unavailable : ''
						} ${selectedTime === slot.start ? styles.selected : ''}`}
						onClick={() => slot.available && onTimeSelect(slot.start)}
					>
						<Typography variant={'buttonText'} weight={'medium'}>
						{slot.start}
						</Typography>
					</div>
				))}
			</div>
		</div>
	)
}

export default TimeSlots
