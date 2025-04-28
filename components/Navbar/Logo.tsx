import logoImg from "@/public/images/house.png";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
	return (
		<div className='md:flex md:items-center  md:gap-12'>
			<Link className='block' href='/'>
				<div className='h-28 w-28'>
					<Image
						src={logoImg}
						alt='logo'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
					/>
				</div>
			</Link>
		</div>
	);
}
