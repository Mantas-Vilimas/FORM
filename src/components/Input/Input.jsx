import React  from "react";


function Input({ label, type, htmlFor, id, name, placeholder}) {



  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
