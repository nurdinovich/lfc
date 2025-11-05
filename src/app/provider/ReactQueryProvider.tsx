'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface Props {
	children: ReactNode
}

export const ReactQueryProvider = ({ children }: Props) => {
	// создаём клиент один раз
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
