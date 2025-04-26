import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { Heart } from "lucide-react";

export default function FavoriteSignInButton() {
	return (
		<SignInButton mode='modal'>
			<Button variant={"outline"}>
				<Heart className='dark:text-white' />
			</Button>
		</SignInButton>
	);
}
