'use client'

import React, { useState, useEffect } from 'react'
import classes from './BookingForm.module.scss'
import Calendar from '../Calendar/Calendar'
import TimeSlots from '../TimeSlots/TimeSlots'
import { Calendars, Time } from '@/shared/assest/icons'
import { CustomButton, Overlay, Typography } from '@/shared/ui'
import { useBookingMutation } from '../../api/useForm'
import { Input } from '../Input/Input'
import { Controller, useForm } from 'react-hook-form'
import { BookingFormData } from '../../types/types'
import classNames from 'classnames'
import { ConsultationStore } from '@/entitles/consultation'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useAvailable } from '../../api/useAvailable'

const BookingForm: React.FC = () => {
	const { employeeId } = ConsultationStore()
	const { t } = useSafeTranslation()

	const [showCalendar, setShowCalendar] = useState(false)
	const [showTimeSlots, setShowTimeSlots] = useState(false)
	const [isOverlayOpen, setIsOverlayOpen] = useState(false)

	const {
		handleSubmit,
		control,
		formState: { errors },
		watch,
		setValue,
	} = useForm<BookingFormData>({
		mode: 'onBlur',
		defaultValues: {
			date: null,
			time: '',
			fullName: '',
			company: '',
			phone: '+996 ',
			email: '',
			purpose: '',
		},
	})

	const selectedDate = watch('date')

	const mutation = useBookingMutation(() => {
		setIsOverlayOpen(true)
	})

	useEffect(() => {
		setValue('time', '')
	}, [selectedDate, setValue])

	const dateFormat = (d: Date | null) => {
		const date = d ? new Date(d) : null
		const formattedDate = date
			? `${date.getFullYear()}-${(date.getMonth() + 1)
					.toString()
					.padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
			: ''
		return formattedDate
	}

	const { availableTimes, unavailableTimes, isLoading, error } = useAvailable(
		employeeId,
		selectedDate
	)

	const onSubmit = (data: BookingFormData) => {
		const formattedDate = dateFormat(data.date)

		if (!employeeId) {
			console.error('Employee ID not found')
			return
		}

		mutation.mutate({
			employee_id: employeeId,
			date: formattedDate,
			time: data.time,
			full_name: data.fullName,
			company: data.company,
			phone_number: data.phone,
			email: data.email,
			description: data.purpose,
		})
	}

	if (!employeeId) {
		return (
			<>
				<BreadCrumbs
					breadCrumbKey='employees'
					thirdElement={'Запись на консультацию'}
				/>
				<Typography className={classes.titlePage} variant='h1' weight='bold'>
					Запись на консультацию
				</Typography>
				<div className={classes.container}>
					<div className={classes.errorMessage}>
						<Typography variant='h3' weight='bold'>
							Ошибка: не выбран сотрудник
						</Typography>
						<Typography variant='b1' weight='regular'>
							Пожалуйста, вернитесь на страницу сотрудников и выберите
							специалиста для записи на консультацию.
						</Typography>
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<BreadCrumbs
				breadCrumbKey='employees'
				thirdElement={'Запись на консультацию'}
			/>
			<Typography className={classes.titlePage} variant='h1' weight='bold'>
				Запись на консультацию
			</Typography>

			<div className={classes.container}>
				<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
					<Typography variant='h2' weight='bold' className={classes.title}>
						Заполните форму
					</Typography>

					<div>
						<Typography
							variant='b1'
							weight='semiBold'
							className={classes.labelDateTime}
						>
							Выберите удобное для вас время и дату
						</Typography>

						<div className={classes.containerDateTime}>
							{/* ДАТА ------------------------------------------------------------------ */}
							<div className={classes.fieldGroup}>
								<Controller
									name='date'
									control={control}
									rules={{ required: 'Дата обязательна' }}
									render={({ field }) => (
										<>
											<div
												className={classNames(
													classes.selectField,
													errors.date?.message && classes.selectFieldError
												)}
												onClick={() => {
													setShowCalendar(!showCalendar)
													setShowTimeSlots(false)
												}}
											>
												<span>
													{field.value ? (
														<Typography variant='b1' weight='regular'>
															{dateFormat(field.value)}
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

											{errors.date?.message && (
												<Typography
													className={classes.error}
													variant='b2'
													weight='semiBold'
												>
													{errors.date?.message}
												</Typography>
											)}

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
															selectedDate={field.value}
															onDateSelect={(date: Date) => {
																field.onChange(date)
																setShowCalendar(false)
															}}
															employeeId={employeeId}
														/>
													</div>
												</div>
											)}
										</>
									)}
								/>
							</div>

							<div className={classes.fieldGroup}>
								<Controller
									control={control}
									name='time'
									rules={{ required: 'Время обязательно' }}
									render={({ field }) => (
										<>
											<div
												className={classNames(
													classes.selectField,
													errors.time?.message && classes.selectFieldError,
													!selectedDate && classes.selectFieldDisabled
												)}
												onClick={() => {
													if (!selectedDate) return
													setShowTimeSlots(!showTimeSlots)
													setShowCalendar(false)
												}}
											>
												<span>
													{field.value ? (
														<Typography variant='b1' weight='regular'>
															{field.value}
														</Typography>
													) : (
														<Typography
															variant='b1'
															weight='regular'
															className={classes.placeholder}
														>
															{selectedDate
																? 'Выберите время'
																: 'Сначала выберите дату'}
														</Typography>
													)}
												</span>
												<Time />
											</div>

											{errors.time?.message && (
												<Typography
													className={classes.error}
													variant='b2'
													weight='semiBold'
												>
													{errors.time?.message}
												</Typography>
											)}

											{showTimeSlots && (
												<div
													className={classes.popupOverlays}
													onClick={() => setShowTimeSlots(false)}
												>
													<div
														className={classes.popupContent}
														onClick={e => e.stopPropagation()}
													>
														{isLoading ? (
															<Typography
																variant='b2'
																weight='regular'
																className={classes.loadingText}
															>
																Загрузка доступного времени...
															</Typography>
														) : error ? (
															<Typography
																variant='b2'
																weight='regular'
																className={classes.error}
															>
																Не удалось загрузить слоты для выбранной даты
															</Typography>
														) : (
															<TimeSlots
																selectedTime={field.value}
																onTimeSelect={(time: string) => {
																	field.onChange(time)
																	setShowTimeSlots(false)
																}}
																availableTimes={availableTimes}
																unavailableTimes={unavailableTimes}
															/>
														)}
													</div>
												</div>
											)}
										</>
									)}
								/>
							</div>
						</div>
					</div>
					<Controller
						control={control}
						name='fullName'
						rules={{ required: 'Имя обязательно' }}
						render={({ field: { value, onChange, onBlur } }) => (
							<Input
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								name='fullName'
								variant='input'
								error={errors.fullName?.message}
								label='Введите ФИО'
								type='text'
								placeholder='ФИО'
							/>
						)}
					/>

					<Controller
						control={control}
						name='company'
						render={({ field: { value, onChange, onBlur } }) => (
							<Input
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								name='company'
								variant='input'
								label='Введите название компании (не обязательное поле)'
								type='text'
								placeholder='Название компании'
							/>
						)}
					/>

					<div className={classes.telEmail}>
						<Controller
							control={control}
							name='phone'
							rules={{
								required: 'Телефон обязателен',
								pattern: {
									value: /^\+996\d{9}$/,
									message: 'Номер должен быть в формате +996XXXXXXXXX',
								},
							}}
							render={({ field: { value, onChange, onBlur } }) => (
								<Input
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									name='phone'
									variant='input'
									label='Введите номер телефона'
									type='tel'
									error={errors.phone?.message}
									placeholder='+996 (000) 00 00 00'
								/>
							)}
						/>

						<Controller
							control={control}
							name='email'
							rules={{ required: 'Почта обязательна' }}
							render={({ field: { value, onChange, onBlur } }) => (
								<Input
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									name='email'
									variant='input'
									label='Введите электронную почту'
									type='email'
									error={errors.email?.message}
									placeholder='E-mail'
								/>
							)}
						/>
					</div>

					<Controller
						control={control}
						name='purpose'
						rules={{ required: 'Суть обращения обязательна' }}
						render={({ field: { value, onChange, onBlur } }) => (
							<Input
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								type='text'
								name='purpose'
								variant='textarea'
								label='Суть обращения'
								error={errors.purpose?.message}
								placeholder='Введите текст'
							/>
						)}
					/>

					<CustomButton
						variant='primary'
						actionType='button'
						type='submit'
						className={classes.submitButton}
						disabled={mutation.isPending}
					>
						{mutation.isPending ? 'Отправка...' : 'Отправить заявку'}
					</CustomButton>
				</form>
			</div>
			{isOverlayOpen && <Overlay onClose={() => setIsOverlayOpen(false)} />}
		</>
	)
}

export default BookingForm
