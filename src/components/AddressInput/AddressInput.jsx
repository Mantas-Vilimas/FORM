import React from "react";
import { useState } from "react";

function AdressInput({ label, type, htmlFor, id, name, placeholder, value}) {

  const [newValue, setNewValue] = useState("pradzia");

  const changeValue = (e) => {
   setNewValue(e.target.value)
   console.log(newValue)
  };



  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
      />
    </div>
  );
}

export default AdressInput;
