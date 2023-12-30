import React from "react";

interface Props {
  title?: string;
  description: string;
  image: string;
}

// TODO: address adding image correctly

function BasicCard({ title, description, image }: Props) {
  return (
    <div className="border rounded-md p-3 shadow">
      {title && (
        <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
          {" "}
          {title}
        </h3>
      )}
      <h5 className="py-5">
        <img alt="art" className="rounded-xs" src={image} />
      </h5>
      <p className="text-gray-500"> {description}</p>
    </div>
  );
}

export default BasicCard;
