import React from "react";

const Input = ({ value, onChange, type, name, id, placeholder, className }) => {
  return (
    <input
      value={value}
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
