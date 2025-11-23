import { breadCrumbs } from "@/shared/constants/constants"
import { IBreadCrumbItem, IThirdBread } from "@/shared/types/globalTypes"

export const generateBreadCrumbs = (
	key: string,
	t: (key: string) => string,
	thirdElement?: string | IThirdBread,
	fourthElement?: string
) => {
	const breadCrumbItem = breadCrumbs.find(item => item.key === key)

	if (!breadCrumbItem) return []

	const baseBreadCrumbs: IBreadCrumbItem[] = [
		{
			label: t('navigation.home'),
			route: '/',
			class: 'breadCrumb',
		},
	]

	baseBreadCrumbs.push({
		label: t(breadCrumbItem.label),
		route: (breadCrumbItem.route || '') as string,
		class: thirdElement || fourthElement ? 'breadCrumb' : 'breadCrumbActive',
	})

	if (thirdElement) {
		baseBreadCrumbs.push({
			label:
				typeof thirdElement === 'object' ? thirdElement.text : thirdElement,
			route: typeof thirdElement === 'object' ? thirdElement.route : '',
			class: fourthElement ? 'breadCrumb' : 'breadCrumbActive',
		})
	}

	if (fourthElement) {
		baseBreadCrumbs.push({
			label: fourthElement,
			route: null,
			class: 'breadCrumbActive',
		})
	}

	return baseBreadCrumbs
}
