import statisticsLottie from "@/public/lottieFiles/statistics.json";
import followUp from "@/public/lottieFiles/followUp.json";
import consultation from "@/public/lottieFiles/consultation.json";
import deal from "@/public/lottieFiles/deal.json";
import { HomePhilosophyData } from "@/utils/websiteData/enums";
export const PhilosophyData = [
	{
		lottie: statisticsLottie,
		heading: HomePhilosophyData.FIRST_CARD_TITLE,
		description: HomePhilosophyData.FIRST_CARD_DESCRIPTION,
	},
	{
		lottie: followUp,
		heading: HomePhilosophyData.SECOND_CARD_TITLE,
		description: HomePhilosophyData.SECOND_CARD_DESCRIPTION,
	},
	{
		lottie: consultation,
		heading: HomePhilosophyData.THIRD_CARD_TITLE,
		description: HomePhilosophyData.THIRD_CARD_DESCRIPTION,
	},
	{
		lottie: deal,
		heading: HomePhilosophyData.FORTH_CARD_TITLE,
		description: HomePhilosophyData.FORTH_CARD_DESCRIPTION,
	},
];
