export const isSnowSeason = (date: Date = new Date()): boolean => {
	const month = date.getMonth()
	const day = date.getDate()

	if (month === 11 && day >= 1) return true 
	if (month === 0) return true 
	if (month === 1 && day <= 1) return true

	return false
}
