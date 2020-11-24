import React from "react";

export default function Input({ input, placeholder }) {
  return (
    <input
      onChange={(value) => input.onChange(value)}
      type={input.name.toLowerCase()}
      required
      className="my-3 px-4 p-2 py-3 rounded-2xl text-white border bg-blackv2-form placeholder-gray-600 w-11/12 focus:outline-none"
      placeholder={placeholder.toUpperCase()}
    />
  );
}
