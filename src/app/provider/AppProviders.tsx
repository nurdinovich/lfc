// app/provider/AppProviders.tsx
'use client'

import { ReactNode } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider'
import dynamic from 'next/dynamic'
import { AccessibilityProvider } from '@/features/accessibility'
import { Footer } from '@/widgets/footer'
import '@/shared/lib/i18next/i18next'

const Header = dynamic(
	() => import('@/widgets/header/view/Header').then(m => m.Header),
	{ ssr: false }
)

interface Props {
	children: ReactNode
}

export function AppProviders({ children }: Props) {
	return (
		<ReactQueryProvider>
			<AccessibilityProvider>
				<Header />
				{children}
				<Footer />
			</AccessibilityProvider>
		</ReactQueryProvider>
	)
}
