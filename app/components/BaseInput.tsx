import { FC } from "react";

interface BaseInputProps {
  title: string;
  placeholder?: string;
}

const BaseInput: FC<BaseInputProps> = ({ title }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text font-semibold text-lg">{title}</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered"
      />
    </label>
  );
};

export default BaseInput;
