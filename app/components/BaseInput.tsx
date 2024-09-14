import { FC } from "react";

interface BaseInputProps {
  title: string;
  placeholder?: string;
}

const BaseInput: FC<BaseInputProps> = ({ title }) => {
  return (
    <div className="grid justify-items-center">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{title}</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default BaseInput;
