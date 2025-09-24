import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CustomInput({
	label,
	placeholder,
	prefix,
	type = "text",
	className = "",
	...props
}) {
	return (
		<Label className="flex flex-col items-start gap-2 font-light text-[#3F3E3E]">
			{label}
			{prefix ? (
				<div className="relative w-full rounded-sm">
					<span className="absolute top-0 bottom-0 flex h-full items-center border-none rounded-l-[12px] bg-[#FFF9F5] px-4 pt-2 text-sm text-[#2A1552]">
						{prefix}
					</span>
					<Input
						type={type}
						placeholder={placeholder}
						{...props}
						className={`rounded-[12px] border border-[#D0D5E0] px-4 pl-24 placeholder:text-sm placeholder:text-[#8791A7] focus:border focus:outline-1 focus-visible:border focus-visible:ring-1 ${className}`}
					/>
				</div>
			) : (
				<Input
					type={type}
					placeholder={placeholder}
					{...props}
					className={`rounded-[12px] border border-[#D0D5E0] px-4 placeholder:text-sm placeholder:text-[#8791A7] focus:border focus:outline-1 focus-visible:border focus-visible:ring-1 ${className}`}
				/>
			)}
		</Label>
	);
}
