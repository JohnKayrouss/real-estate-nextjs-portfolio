import { cn } from "@/lib/utils";

type FormRowProps = {
	children: React.ReactNode;
	className: string;
};

export default function FormRow({ children, className }: FormRowProps) {
	return (
		<div className={cn("sm:grid-cols-1 grid gap-4 my-6", className)}>
			{children}
		</div>
	);
}
