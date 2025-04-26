import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
type NumberInputProps = {
	name: string;
	label?: string;
	defaultValue?: number;
	minimumNumber?: number;
	maximumNumber?: number;
	labelClassName?: string;
	inputClassName?: string;
	placeholder?: string;
};
export default function NumberInput({
	name,
	label,
	labelClassName,
	minimumNumber = 0,
	maximumNumber,
	inputClassName,
	placeholder = "0",
	defaultValue,
}: NumberInputProps) {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className={cn(" capitalize ", labelClassName)}>
				{label || name}
			</Label>
			<Input
				name={name}
				type='number'
				defaultValue={defaultValue}
				min={minimumNumber}
				max={maximumNumber}
				required
				placeholder={placeholder}
				className={cn("mt-2 ", inputClassName)}
			/>
		</div>
	);
}
