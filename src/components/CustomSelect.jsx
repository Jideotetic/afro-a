import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function CustomSelect({
	options,
	label,
	closeMenuOnSelect = false,
	isMulti = true,
	disabled = false,
	onChange,
}) {
	return (
		<div className="flex flex-col gap-1 text-sm">
			<label className="block  font-light text-[#3F3E3E]">{label}</label>

			<Select
				closeMenuOnSelect={closeMenuOnSelect}
				components={animatedComponents}
				placeholder="Select"
				isMulti={isMulti}
				disabled={disabled}
				options={options}
				onChange={onChange}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						borderColor: state.isFocused ? "#D0D5E0" : "#D0D5E0",
						borderRadius: "12px",
						height: "46px",
					}),
					multiValue: (styles) => {
						return {
							...styles,
							backgroundColor: "#FFF3EA",
							color: "#261447",
							fontWeight: "300",
							borderRadius: "4px",
						};
					},
					multiValueRemove: (styles) => ({
						...styles,
						color: "#FE7A04",
						backgroundColor: "white",
						borderRadius: "50%",
					}),
				}}
			/>
		</div>
	);
}

export default CustomSelect;
