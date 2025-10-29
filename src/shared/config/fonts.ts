import localFont from 'next/font/local'

export const mulish = localFont({
	src: [
		{
			path: '../assest/fonts/Mulish-Regular.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assest/fonts/Mulish-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assest/fonts/Mulish-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assest/fonts/Mulish-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-mulish',
	display: 'swap',
})
