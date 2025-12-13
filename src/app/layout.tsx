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
			<head>
				<link rel='dns-prefetch' href='//159.223.28.248' />
				<link
					rel='preconnect'
					href='http://159.223.28.248:8000'
					crossOrigin=''
				/>
			</head>

			<body className={`${mulish.className} ${mulish.variable}`}>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	)
}
