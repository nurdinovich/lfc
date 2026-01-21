import { mulish } from '@/shared/config/fonts'
import './styles/global.scss'
import { AppProviders } from './provider/AppProviders'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: 'Юридические услуги в Бишкеке — LFC',
		template: '%s | LFC',
	},
	description:
		'Юридические и бухгалтерские услуги в Бишкеке. Консультация юриста, сопровождение бизнеса, регистрация компаний. LFC (LFC).',

	keywords: [
		'юридические услуги Бишкек',
		'юрист Бишкек',
		'юридическая компания Бишкек',
		'бухгалтерские услуги Бишкек',
		'регистрация компаний Бишкек',
		'бухгалтер Бишкек',
		'юридический и бухгалтерские услуги Бишкек',
	],

	openGraph: {
		title: 'Юридические услуги в Бишкеке — LFC',
		description:
			'Юридические и бухгалтерские услуги в Бишкеке. Консультация юриста, сопровождение бизнеса, регистрация компаний.',
		url: 'https://lfc.kg',
		siteName: 'LFC',
		locale: 'ru_RU',
		type: 'website',
	},

	robots: {
		index: true,
		follow: true,
	},
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
