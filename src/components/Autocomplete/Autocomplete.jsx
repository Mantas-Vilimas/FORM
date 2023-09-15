import React, { useRef, useEffect } from "react";
import "./styles.css";

const AutoComplete = ({handleAddress}) => {

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["geocode"],
  };

  const fillAddress = (value) => {
    handleAddress(value)
  }


  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      fillAddress(place.address_components)
      inputRef.value = ""
    });
  }, []);


  return (
    <div>
      <label>Searc you adress :</label>
      <input ref={inputRef} placeholder="type here" />
    </div>
  );
};
export default AutoComplete;
