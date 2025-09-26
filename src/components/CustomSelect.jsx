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
	value,
}) {
	return (
		<div className="flex flex-col gap-1 text-sm">
			<label className="block  font-light text-[#3F3E3E]">{label}</label>

			<Select
				closeMenuOnSelect={closeMenuOnSelect}
				components={animatedComponents}
				placeholder="Select"
				isMulti={isMulti}
				isDisabled={disabled}
				options={options}
				onChange={onChange}
				value={value}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						border: state.isFocused ? "1px solid #D0D5E0" : "1px solid #D0D5E0",
						":hover": { borderColor: "#D0D5E0" },
						outline: "none",
						borderRadius: "12px",
						height: "46px",
						boxShadow: "none",
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
