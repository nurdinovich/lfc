import React from 'react'
import styles from './Calendar.module.scss'
import { ButtonNav, ButtonNavs } from '@/shared/assest/icons'
import { Typography } from '@/shared/ui'

interface CalendarProps {
	selectedDate: Date | null
	onDateSelect: (date: Date) => void
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
	// удалили currentMonth, так как он нигде не используется
	const daysInMonth = new Date(2025, 10, 0).getDate()
	const firstDayOfMonth = new Date(2025, 9, 1).getDay()

	const days: number[] = []
	const daysInPrevMonth = new Date(2025, 9, 0).getDate()
	const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

	// дни из предыдущего месяца
	for (let i = 0; i < startOffset; i++) {
		days.push(daysInPrevMonth - startOffset + i + 1)
	}

	// дни текущего месяца
	for (let i = 1; i <= daysInMonth; i++) {
		days.push(i)
	}

	// дни из следующего месяца
	const lastDayOfMonth = new Date(2025, 9, daysInMonth).getDay()
	const daysNeededFromNextMonth = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth
	for (let i = 1; i <= daysNeededFromNextMonth; i++) {
		days.push(i)
	}

	const handleDateClick = (day: number, isCurrentMonth: boolean) => {
		if (isCurrentMonth) {
			const date = new Date(2025, 9, day)
			onDateSelect(date)
		}
	}

	return (
		<div className={styles.calendar}>
			<div className={styles.calendarHeader}>
				<span className={styles.monthYear}>Октябрь 2025</span>
				<div className={styles.navButtons}>
					<button className={styles.navButton}>
						<ButtonNavs />
					</button>
					<button className={styles.navButton}>
						<ButtonNav />
					</button>
				</div>
			</div>

			<hr />

			<div className={styles.weekDays}>
				{['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
					<Typography
						variant='b2'
						weight='regular'
						key={day}
						className={styles.weekDay}
					>
						{day}
					</Typography>
				))}
			</div>

			<div className={styles.daysGrid}>
				{days.map((day, index) => {
					const isPrevMonth = index < startOffset
					const isCurrentMonth =
						index >= startOffset && index < startOffset + daysInMonth
					// убрали isNextMonth, так как он нигде не использовался

					const isSelected =
						selectedDate &&
						isCurrentMonth &&
						selectedDate.getDate() === day &&
						selectedDate.getMonth() === 9

					return (
						<div
							key={index}
							className={`${styles.day} ${
								isCurrentMonth
									? styles.currentMonth
									: isPrevMonth
									? styles.prevMonth
									: styles.nextMonth
							} ${isSelected ? styles.selected : ''}`}
							onClick={() => handleDateClick(day, isCurrentMonth)}
						>
							<Typography variant='buttonText' weight='semiBold'>
								{day}
							</Typography>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar
