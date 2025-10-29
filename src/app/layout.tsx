import { mulish } from '@/shared/config/fonts'
import './styles/global.scss'
import { Header } from '@/widgets/header/Header'
import { Footer } from '@/widgets/footer/view/Footer'
import { AccessibilityProvider } from '@/features/accessibility'


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={mulish.variable}>
				<AccessibilityProvider>
				<Header />
				{children}
				<Footer />
				</AccessibilityProvider>
			</body>
		</html>
	)
}
