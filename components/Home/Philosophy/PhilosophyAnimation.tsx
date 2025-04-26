import Lottie from "lottie-react";
type Props = { animation: unknown };
export default function PhilosophyAnimation({ animation }: Props) {
	return <Lottie animationData={animation} className=' h-[120px] ' />;
}
