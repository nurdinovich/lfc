import { mulish } from '@/shared/config/fonts'
import './styles/global.scss'
import { AppProviders } from './provider/AppProviders'

export const metadata = {
	title: 'LFC',
	description:
		'Профессиональные юридические и бухгалтерские услуги в Бишкеке от LFC',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={`${mulish.className} ${mulish.variable}`}>
				<AppProviders>
					<main id='main-content'>{children}</main>
				</AppProviders>
			</body>
		</html>
	)
}
