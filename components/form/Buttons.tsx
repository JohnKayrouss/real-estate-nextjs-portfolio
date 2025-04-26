"use client";
import React, { Children } from "react";
import { useFormStatus } from "react-dom";
import { FilePenLine, Trash } from "lucide-react";

import { Button } from "../ui/button";
import { CircleDashed, CircleDotDashed } from "lucide-react";
import { cn } from "@/lib/utils";
import { btns } from "@/utils/websiteData/enums";

type SubmitButtonProps = {
	children?: React.ReactNode;
	type?: string;
	className?: string;
};

export function SubmitButton({ type, className, children }: SubmitButtonProps) {
	const { pending } = useFormStatus();
	let pendingText = btns.SUBMITTING;
	let text = btns.SUBMIT;
	if (type === "update") {
		pendingText = btns.UPDATING;
		text = btns.UPDATE;
	}
	return (
		<Button
			disabled={pending}
			className={cn("capitalize cursor-pointer", className)}
			size='lg'>
			{pending ? (
				<span className='flex gap-1 items-center'>
					<CircleDashed className='animate-spin  ' /> {pendingText}
				</span>
			) : children ? (
				children
			) : (
				text
			)}
		</Button>
	);
}

type actionType = "edit" | "delete";
type variantType =
	| "default"
	| "secondary"
	| "destructive"
	| "link"
	| "ghost"
	| "outline";

export function IconButton({
	actionType,
	variantType = "link",
	className,
}: {
	actionType: actionType;
	variantType?: variantType;
	className?: string;
}) {
	const { pending } = useFormStatus();
	const renderIcon = () => {
		switch (actionType) {
			case "edit":
				return <FilePenLine className='w-4 ' />;
			case "delete":
				return <Trash className='w-4' />;
			default:
				const never: never = actionType;
				throw new Error(`Invalid action type: ${never}`);
		}
	};
	return (
		<Button
			type='submit'
			size='icon'
			variant={variantType}
			className={cn(" cursor-pointer text-primary", className)}
			disabled={pending}>
			<span className='flex items-center gap-1'>
				{pending ? <CircleDotDashed className='animate-spin' /> : renderIcon()}
			</span>
		</Button>
	);
}
