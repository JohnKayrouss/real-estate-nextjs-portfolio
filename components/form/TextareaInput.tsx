import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type TextareaInputProps = {
	label?: string;
	name: string;
	defaultValue?: string;
	labelClassName?: string;
	textareaClassName?: string;
};
export default function TextareaInput({
	label,
	name,
	defaultValue,
	labelClassName,
	textareaClassName,
}: TextareaInputProps) {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className={cn(" capitalize ", labelClassName)}>
				{label || name}
			</Label>
			<Textarea
				name={name}
				className={cn(" mt-2 ", textareaClassName)}
				rows={5}
				defaultValue={defaultValue}
				required
			/>
		</div>
	);
}
