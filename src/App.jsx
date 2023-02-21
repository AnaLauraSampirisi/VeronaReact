import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a Verona"} />
    </div>
  );
};

export default App;