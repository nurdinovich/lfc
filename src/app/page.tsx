'use client'
import { Loader } from "@/shared/ui/loader/view/Loader";
import { AboutBlock } from "@/widgets/aboutBlock";
import { Contact } from "@/widgets/contact";
import { EmployeesBlock } from "@/widgets/employeesBlock";
import { FaqBlock } from "@/widgets/faqBlock";
import { HeroBlock } from "@/widgets/heroBlock";
import { NewsBlock } from "@/widgets/newsBlock";
import { ServicesBlock } from "@/widgets/servicesBlock";
import { useEffect, useState } from "react";


export default function Home() {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) {
		return <Loader />
	}
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
