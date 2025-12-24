'use client'

import { ReactNode } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider'
import dynamic from 'next/dynamic'
import { AccessibilityProvider } from '@/features/accessibility'
import { Footer } from '@/widgets/footer'
import { SnowfallCanvas } from '@/shared/ui'



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
				<SnowfallCanvas />
				<Header />
				{children}
				<Footer />
			</AccessibilityProvider>
		</ReactQueryProvider>
	)
}
