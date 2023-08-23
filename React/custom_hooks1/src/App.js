// Custom Hooks

// Custom Hookes are used to separate buisness(logic) layer from presentation layer

// Theay are responsiple to return the results of ceartain business logic.

// So we will never return jsx from our custom hooks.

// Custom Hooks are also used for reusability of functionality.

// Hook name should start with "Use" keyword.

// Custom hook can also consist of predefined hooks.

// Custom hook components should be returned within curly braces.
import React from "react";
import UserForm from "./UserForm";

function App() {
  return (
    <div>
    {/*ex. 1*/}
    <UserForm />
    </div>
  );
}

export default App;
