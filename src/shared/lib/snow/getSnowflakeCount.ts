export const getSnowflakeCount = () => {
	if (typeof window === 'undefined') return 0

	const width = window.innerWidth

	if (width < 480) return 40 // мобильные
	if (width < 768) return 70 // планшеты
	return 120 // десктоп
}
