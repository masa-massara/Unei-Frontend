import React from "react";

const CreateButton = ({ name }: { name: string }) => {
  return (
    <button className="font-extrabold h-10 w-64 rounded-full bg-custom-pink">
      {name}
    </button>
  );
};

export default CreateButton;
