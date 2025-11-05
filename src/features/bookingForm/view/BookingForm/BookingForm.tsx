'use client'
import React, { useState } from 'react'
import classes from './BookingForm.module.scss'
import { BookingFormData } from '../../types/types'
import Calendar from '../Calendar/Calendar'
import TimeSlots from '../TimeSlots/TimeSlots'
import { Calendars, Time } from '@/shared/assest/icons'
import { CustomButton, Typography } from '@/shared/ui'

const BookingForm: React.FC = () => {
	const [formData, setFormData] = useState<BookingFormData>({
		date: null,
		time: '',
		fullName: '',
		company: '',
		phone: '+996 (',
		email: '',
		purpose: '',
	})

	const [showCalendar, setShowCalendar] = useState(false)
	const [showTimeSlots, setShowTimeSlots] = useState(false)

	const handleDateSelect = (date: Date) => {
		setFormData(prev => ({ ...prev, date }))
		setShowCalendar(false)
	}

	const handleTimeSelect = (time: string) => {
		setFormData(prev => ({ ...prev, time }))
		setShowTimeSlots(false)
	}

	const handleInputChange = (field: keyof BookingFormData, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	const handlePhoneChange = (value: string) => {
		let digits = value.replace(/\D/g, '')
		if (digits.startsWith('996')) {
			digits = digits.slice(3)
		}
		let formatted = '+996'
		if (digits.length > 0) {
			formatted += ` (${digits.slice(0, 3)}`
		}

		if (digits.length > 3) {
			formatted += `) ${digits.slice(3, 5)}`
		}

		if (digits.length > 5) {
			formatted += ` ${digits.slice(5, 7)}`
		}

		if (digits.length > 7) {
			formatted += ` ${digits.slice(7, 9)}`
		}

		setFormData(prev => ({ ...prev, phone: formatted }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
	}

	return (
		<div className={classes.container}>
			<form className={classes.form} onSubmit={handleSubmit}>
				<Typography variant='h2' weight='bold' className={classes.title}>
					Заполните форму
				</Typography>
				<Typography variant='b1' weight='semiBold' className={classes.subtitle}>
					Выберите удобное для вас время и дату
				</Typography>

				<div className={classes.fields}>
					<div className={classes.fieldGroup}>
						<Typography variant='b2' weight='medium' className={classes.label}>
							Выберите дату
						</Typography>
						<div
							className={classes.selectField}
							onClick={() => {
								setShowCalendar(!showCalendar)
								setShowTimeSlots(false)
							}}
						>
							<span>
								{formData.date ? (
									<Typography variant='b1' weight='regular'>
										{formData.date.toLocaleDateString('ru-RU')}
									</Typography>
								) : (
									<Typography
										variant='b1'
										weight='regular'
										className={classes.placeholder}
									>
										Выберите дату
									</Typography>
								)}
							</span>
							<Calendars />
						</div>

						{showCalendar && (
							<div
								className={classes.popupOverlay}
								onClick={() => setShowCalendar(false)}
							>
								<div
									className={classes.popupContent}
									onClick={e => e.stopPropagation()}
								>
									<Calendar
										selectedDate={formData.date}
										onDateSelect={handleDateSelect}
									/>
								</div>
							</div>
						)}
					</div>

					<div className={classes.fieldGroup}>
						<Typography variant='b2' weight='medium' className={classes.label}>
							Выберите время
						</Typography>
						<div
							className={classes.selectField}
							onClick={() => {
								setShowTimeSlots(!showTimeSlots)
								setShowCalendar(false)
							}}
						>
							<span>
								{formData.time ? (
									<Typography variant='b1' weight='regular'>
										{formData.time}
									</Typography>
								) : (
									<Typography
										variant='b1'
										weight='regular'
										className={classes.placeholder}
									>
										Выберите время
									</Typography>
								)}
							</span>
							<Time />
						</div>

						{showTimeSlots && (
							<div
								className={classes.popupOverlays}
								onClick={() => setShowTimeSlots(false)}

							>
								<div
									className={classes.popupContent}
									onClick={e => e.stopPropagation()}
								>
									<TimeSlots
										selectedTime={formData.time}
										onTimeSelect={handleTimeSelect}
									/>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className={classes.fieldGroup}>
					<Typography variant='b2' weight='medium' className={classes.label}>
						Введите ФИО
					</Typography>
					<input
						type='text'
						className={classes.input}
						placeholder='ФИО'
						value={formData.fullName}
						onChange={e => handleInputChange('fullName', e.target.value)}
						required
					/>
				</div>

				<div className={classes.fieldGroup}>
					<Typography variant='b2' weight='medium' className={classes.label}>
						Введите название компании{' '}
						<span className={classes.optional}>
							<Typography variant='b2' weight='regular'>
								(не обязательное поле)
							</Typography>
						</span>
					</Typography>
					<input
						type='text'
						className={classes.input}
						placeholder='Название компании'
						value={formData.company}
						onChange={e => handleInputChange('company', e.target.value)}
					/>
				</div>

				<div className={classes.fields}>
					<div className={classes.fieldGroup}>
						<Typography variant='b2' weight='medium' className={classes.label}>
							Введите номер телефона
						</Typography>
						<input
							type='tel'
							className={classes.input}
							placeholder='+996 (000) 000 000'
							value={formData.phone}
							onChange={e => handlePhoneChange(e.target.value)}
							required
						/>
					</div>
					<div className={classes.fieldGroup}>
						<Typography variant='b2' weight='medium' className={classes.label}>
							Введите электронную почту
						</Typography>
						<input
							type='email'
							className={classes.input}
							placeholder='E-mail'
							value={formData.email}
							onChange={e => handleInputChange('email', e.target.value)}
							required
						/>
					</div>
				</div>

				<div className={classes.fieldGroup}>
					<Typography variant='b2' weight='medium' className={classes.label}>
						Суть обращения
					</Typography>
					<textarea
						className={classes.textarea}
						placeholder='Введите текст'
						value={formData.purpose}
						onChange={e => handleInputChange('purpose', e.target.value)}
						required
						rows={4}
					/>
				</div>

				<CustomButton
					variant='primary'
					actionType='button'
					type='submit'
					className={classes.submitButton}
				>
					<Typography variant='b1' weight='medium'>
						Отправить заявку
					</Typography>
				</CustomButton>
			</form>
		</div>
	)
}

export default BookingForm
