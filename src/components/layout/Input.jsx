import React from "react";

const Input = ({ onChange, type, name, id, placeholder, className }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
