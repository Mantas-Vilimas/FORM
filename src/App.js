import React from "react";
import "./App.css";
import { useState } from "react";
import Layout from "./composition/Layout/Layout";

import Form from "./components/Form/Form";
import UsersList from "./components/UsersList/UsersList";



function App() {
 
  const [formData, setFormData] = useState()

  const handleForm = (data) => {
    setFormData(data)
  }

  return (
    <div className="App">
      <Layout>
        <Form onChange={handleForm}/>
        <UsersList formData={formData}/>
      </Layout>
    </div>
  );
}

export default App;
