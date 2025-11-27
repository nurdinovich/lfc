import { IThirdBread } from '@shared/types/globalTypes'

export interface BreadProps {
	breadCrumbKey: string
	thirdElement?: string | IThirdBread
	fourthElement?: string
}
