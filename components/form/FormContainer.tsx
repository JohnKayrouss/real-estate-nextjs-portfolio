"use client";
import { toast } from "sonner";

import { TActionFunction } from "@/utils/types";
import React, { useActionState, useEffect } from "react";

interface FormContainerProps {
	children: React.ReactNode;
	action: TActionFunction;
}
export default function FormContainer({
	children,
	action,
}: FormContainerProps) {
	const initialState = {
		message: "",
	};
	const [state, formAction] = useActionState(action, initialState);
	useEffect(() => {
		if (state && state.message) {
			toast(state.message, {
				style: { color: "#3d82f6" },
			});
		}
	}, [state]);

	return <form action={formAction}>{children}</form>;
}
