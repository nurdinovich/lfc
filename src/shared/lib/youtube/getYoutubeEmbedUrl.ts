export const getYoutubeEmbedUrl = (url?: string): string | null => {
	if (!url) return null

	try {
		// youtu.be/VIDEO_ID
		if (url.includes('youtu.be/')) {
			const id = url.split('youtu.be/')[1].split('?')[0]
			return `https://www.youtube.com/embed/${id}`
		}

		// youtube.com/watch?v=VIDEO_ID
		if (url.includes('youtube.com')) {
			const parsed = new URL(url)
			const id = parsed.searchParams.get('v')
			if (id) {
				return `https://www.youtube.com/embed/${id}`
			}
		}

		return null
	} catch {
		return null
	}
}
