import { mulish } from '@/shared/config/fonts'
import './styles/global.scss'
import { Header } from '@/widgets/header/view/Header'
import { Footer } from '@/widgets/footer/view/Footer'
import { AccessibilityProvider } from '@/features/accessibility'
import { ReactQueryProvider } from './provider/ReactQueryProvider'

export const metadata = {
	title: 'LFC',
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={mulish.variable}>
				<ReactQueryProvider>
				<AccessibilityProvider>
				<Header />
				{children}
				<Footer />
				</AccessibilityProvider>
				</ReactQueryProvider>
			</body>
		</html>
	)
}
