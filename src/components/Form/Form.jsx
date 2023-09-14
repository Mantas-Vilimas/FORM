import React from "react";
import Input from "../Input/Input";
import AutoComplete from "../Autocomplete/Autocomplete";
import AdressInput from "../AddressInput/AddressInput";
import { useState, useEffect } from "react";

const Form = () => {
  const [address, setAddress] = useState([]);
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setPostalCode] = useState();

  const handleSubmitNew = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const usersListJSON = localStorage.getItem("usersList");


    const usersArray = localStorage.getItem("usersList")
      ? JSON.parse(localStorage.getItem("usersList"))
      : [];

    if (usersListJSON) {
        usersArray.push(user)
        localStorage.setItem("usersList", JSON.stringify(usersArray))
    } else {
        localStorage.setItem("usersList", JSON.stringify(usersArray));
    }
  };

  const newAddress = (value) => {
    setAddress(value);
  };

  useEffect(() => {
    for (const component of address) {
      const type = component.types[0];
      switch (type) {
        case "route":
          setStreet(component.long_name);
          break;
        case "locality":
          setCity(component.long_name);
          break;
        case "country":
          setCountry(component.long_name);
          break;
        case "postal_code":
          setPostalCode(component.long_name);
          break;
        default:
          console.log("irrelevent component type");
          break;
      }
    }
  }, [address]);

  return (
    <div>
      <form method="post" onSubmit={handleSubmitNew}>
        <Input
          label="Name"
          name="name"
          id="name"
          htmlFor="name"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          label="Surname"
          name="surname"
          id="surname"
          htmlFor="surname"
          placeholder="Enter your surname"
          type="text"
        />
        <Input
          label="Email"
          name="email"
          id="email"
          htmlFor="email"
          placeholder="Enter your email"
          type="email"
        />
        <AutoComplete handleAddress={newAddress} />
        <AdressInput
          label="Country"
          id="country"
          name="country"
          htmlFor="country"
          type="text"
          value={country}
        />
        <AdressInput
          label="Street"
          name="street"
          id="street"
          htmlFor="street"
          type="text"
          value={street}
        />
        <AdressInput
          label="City"
          name="city"
          id="city"
          htmlFor="city"
          type="text"
          value={city}
        />
        <AdressInput
          label="Postal Code"
          name="postal_code"
          id="postal_code"
          htmlFor="postal_code"
          type="text"
          value={postalCode}
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
