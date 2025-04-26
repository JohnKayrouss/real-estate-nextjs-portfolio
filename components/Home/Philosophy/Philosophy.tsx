import React, { Suspense } from "react";
import { PhilosophyCard } from "./PhilosophyCard";
import { PhilosophyData } from "./PhilosophyData";
import SectionHeader from "@/components/reusable/SectionHeader";
import { LoadingPhilosophyCardsSkeleton } from "./LoadingPhilosophyCardsSkeleton";
import { Philosophydata } from "@/utils/websiteData/enums";

export default function Philosophy() {
	const PhilosophyCards = PhilosophyData?.map((card, idx) => {
		return (
			<PhilosophyCard
				key={idx}
				lottie={card.lottie}
				heading={card.heading}
				description={card.description}
			/>
		);
	});
	return (
		<section className='px-6 mb-10'>
			<SectionHeader heading={Philosophydata.HEADER} />
			<Suspense fallback={<LoadingPhilosophyCardsSkeleton />}>
				<div className=' grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-8 py-10'>
					{PhilosophyCards}
				</div>
			</Suspense>
		</section>
	);
}
