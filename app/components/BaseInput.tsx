import { FC } from "react";

interface BaseInputProps {
	title: string;
	placeholder?: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<BaseInputProps> = ({
	title,
	name,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<label className="form-control">
			<div className="label">
				<span className="label-text font-semibold text-lg">
					{title}
				</span>
			</div>
			<input
				type="text"
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder || "Type here"}
				className="input input-bordered"
			/>
		</label>
	);
};

export default BaseInput;
