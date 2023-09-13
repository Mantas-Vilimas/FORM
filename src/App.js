import React, { useState} from "react";
import "./App.css";
import Layout from "./composition/Layout/Layout";
import Input from "./components/Input/Input";
import AutoComplete from "./components/Autocomplete/Autocomplete";
import AdressInput from "./components/AddressInput/AddressInput";



function App() {
  const [address, setAddress] = useState([])

  
  const newAddress = (value) => {
      setAddress(value)
  }

  // Esme, kad buna tuscias array tas adress ir tada kai pasirenki koki nors adresa jis pasikeicia i normalu objekta, bet mano value kuri paduodu inputui tai bando nuskaityti iskarto, o ten nera tokio adress[2].long_name. Band=iau ir su useEffect, kad po to uzkrautu, bet vistiek pirmiau nuskaito ta value kurio nera.


  return (
    <div className="App">
      <Layout>
        FORMA
        <AutoComplete handleAddress={newAddress}/>
        <form>
          <Input
            label="Name"
            id="name"
            htmlFor="name"
            placeholder="Enter your name"
            type="text"
          />
          <Input
            label="Surname"
            id="surname"
            htmlFor="surname"
            placeholder="Enter your surname"
            type="text"
          />
          <Input
            label="Email"
            id="email"
            htmlFor="email"
            placeholder="Enter your email"
            type="email"
          />
          <AdressInput label="City" id="city" htmlFor="city" type="text" value={address[2].long_name} />

         

        </form>
      </Layout>
    </div>
  );
}

export default App;
