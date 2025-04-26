import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
type NumberInputProps = {
	name: string;
	label?: string;
	defaultValue?: string;
	labelClassName?: string;
	inputClassName?: string;
	placeholder?: string;
};
export default function TextInput({
	name,
	label,
	labelClassName,
	inputClassName,
	placeholder,
	defaultValue,
}: NumberInputProps) {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className={cn(" capitalize ", labelClassName)}>
				{label || name}
			</Label>
			<Input
				name={name}
				type='text'
				required
				placeholder={placeholder}
				defaultValue={defaultValue}
				className={cn("mt-2 ", inputClassName)}
			/>
		</div>
	);
}
