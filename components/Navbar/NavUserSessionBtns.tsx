import Link from "next/link";
import { Button } from "../ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { sessionBtns } from "@/utils/websiteData/enums";
export default function NavUserSessionBtns() {
	return (
		<>
			<div className='hidden lg:flex'>
				<SignInButton mode='modal'>
					<Button className='rounded-md bg-primary text-white px-5 py-2.5 text-sm font-medium'>
						{sessionBtns.LOGIN}
					</Button>
				</SignInButton>
			</div>
			<div className='hidden lg:flex'>
				<SignUpButton mode='modal'>
					<Button className='rounded-md bg-primary text-white  px-5 py-2.5 text-sm font-medium '>
						{sessionBtns.REGISTER}
					</Button>
				</SignUpButton>
			</div>
		</>
	);
}
