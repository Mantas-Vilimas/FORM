import React, {useEffect} from "react";
import { useState } from "react";

function AdressInput({ label, type, htmlFor, id, name, placeholder, value, }) {

  const [newValue, setNewValue] = useState(value);

  if(newValue === undefined) {
    setNewValue("")
  }

   const handleChange = (e) => {
    setNewValue(e.target.value)
   }


useEffect(()=> {
  setNewValue(value)
}, [value])

  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={newValue}
        onChange={handleChange}
        
      />
    </div>
  );
}

export default AdressInput;
