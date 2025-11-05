import BookingForm from '@/features/bookingForm/view/BookingForm/BookingForm'
import { MultiContainer } from '@/shared/ui'

const page = () => {
	return (
		<div>
			<MultiContainer>
				<BookingForm />
			</MultiContainer>
		</div>
	)
}

export default page
