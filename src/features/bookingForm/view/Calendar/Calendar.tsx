import React, { useState, useMemo } from 'react'
import styles from './Calendar.module.scss'
import { ButtonNav, ButtonNavs } from '@/shared/assest/icons'
import { Typography } from '@/shared/ui'
import { useAvailable } from '../../api/useAvailable'


interface CalendarProps {
	selectedDate: Date | null
	onDateSelect: (date: Date) => void
	employeeId: number
}

const Calendar: React.FC<CalendarProps> = ({
	selectedDate,
	onDateSelect,
	employeeId,
}) => {
	const [currentDate, setCurrentDate] = useState<Date>(
		selectedDate || new Date()
	)

	const { data: availabilityData, isLoading } = useAvailable(employeeId)

	const month = currentDate.getMonth()
	const year = currentDate.getFullYear()

	const isDateUnavailable = (date: Date): boolean => {
		if (!availabilityData?.unavailable_dates) return false

		const dateStr = date.toISOString().split('T')[0]
		return availabilityData.unavailable_dates.includes(dateStr)
	}

	const isWeekend = (date: Date): boolean => {
		const day = date.getDay()
		return day === 0 || day === 6 
	}

	const { days, startOffset, daysInMonth } = useMemo(() => {
		const daysInMonth = new Date(year, month + 1, 0).getDate()
		const firstDayOfMonth = new Date(year, month, 1).getDay()

		const daysArr: number[] = []
		const daysInPrevMonth = new Date(year, month, 0).getDate()

		const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

		for (let i = 0; i < offset; i++) {
			daysArr.push(daysInPrevMonth - offset + i + 1)
		}

		for (let i = 1; i <= daysInMonth; i++) {
			daysArr.push(i)
		}

		const lastDayOfMonth = new Date(year, month, daysInMonth).getDay()
		const daysNeededFromNextMonth =
			lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth
		for (let i = 1; i <= daysNeededFromNextMonth; i++) {
			daysArr.push(i)
		}

		return { days: daysArr, startOffset: offset, daysInMonth }
	}, [month, year])

	const handleDateClick = (day: number, isCurrentMonth: boolean) => {
		const newDate = new Date(year, isCurrentMonth ? month : month + 1, day)

		if (isDateUnavailable(newDate)) {
			return
		}

		onDateSelect(newDate)
	}

	const goToPrevMonth = () => {
		setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
	}

	const goToNextMonth = () => {
		setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
	}

	const monthNames = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	]
console.log(availabilityData)

	return (
		<div className={styles.calendar}>
			<div className={styles.calendarHeader}>
				<span className={styles.monthYear}>
					{monthNames[month]} {year}
				</span>

				<div className={styles.navButtons}>
					<button className={styles.navButton} onClick={goToPrevMonth}>
						<ButtonNavs />
					</button>

					<button className={styles.navButton} onClick={goToNextMonth}>
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
					const date = new Date(
						year,
						isCurrentMonth ? month : isPrevMonth ? month - 1 : month + 1,
						day
					)

					const isSelected =
						selectedDate &&
						isCurrentMonth &&
						selectedDate.getDate() === day &&
						selectedDate.getMonth() === month &&
						selectedDate.getFullYear() === year

					const isUnavailable = isDateUnavailable(date)
					const isWeekendDay = isWeekend(date)
					const isDisabled = isUnavailable || isWeekendDay

					return (
						<div
							key={index}
							className={`${styles.day} ${
								isCurrentMonth
									? styles.currentMonth
									: isPrevMonth
									? styles.prevMonth
									: styles.nextMonth
							} ${isSelected ? styles.selected : ''} 
              ${isDisabled ? styles.disabled : ''}
              ${isWeekendDay ? styles.weekend : ''}`}
							onClick={() =>
								!isDisabled && handleDateClick(day, isCurrentMonth)
							}
							title={isDisabled ? 'Эта дата недоступна для записи' : undefined}
						>
							<Typography
								variant='buttonText'
								weight='semiBold'
								className={isDisabled ? styles.disabledText : ''}
							>
								{day}
							</Typography>
						</div>
					)
				})}
			</div>

			{isLoading && (
				<div className={styles.loading}>
					<Typography variant='b2' weight='regular'>
						Загрузка доступных дат...
					</Typography>
				</div>
			)}
		</div>
	)
}

export default Calendar
