import { AboutBlock, Contact, EmployeesBlock, FaqBlock, HeroBlock, NewsBlock, ServicesBlock } from "@/widgets";


export default function Home() {
	return (
		<>
			<HeroBlock />
			<AboutBlock />
			<ServicesBlock />
			<NewsBlock />
			<EmployeesBlock />
			<Contact />
			<FaqBlock />
		</>
	)
}
