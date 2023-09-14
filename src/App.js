import React from "react";
import "./App.css";
import Layout from "./composition/Layout/Layout";

import Form from "./components/Form/Form";
import UsersList from "./components/UsersList/UsersList";



function App() {
 
  

  return (
    <div className="App">
      <Layout>
        <Form/>
        <UsersList/>
      </Layout>
    </div>
  );
}

export default App;
