import { AboutBlock } from "@/widgets/aboutBlock";
import { Contact } from "@/widgets/contact";
import { EmployeesBlock } from "@/widgets/employeesBlock";
import { FaqBlock } from "@/widgets/faqBlock";
import { HeroBlock } from "@/widgets/heroBlock";
import { NewsBlock } from "@/widgets/newsBlock";
import { ServicesBlock } from "@/widgets/servicesBlock";





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
