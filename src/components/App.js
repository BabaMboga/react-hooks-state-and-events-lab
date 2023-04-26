import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isLightMode, setIsLightMode] = useState(true);

  //event handler for dark mode button click

  const handleDarkMode = () => {
    setIsLightMode(!isLightMode);
  };

  // appClass variable is set depending on the state variable isLightMode

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLightMode ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
