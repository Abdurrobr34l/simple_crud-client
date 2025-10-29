import React from "react";
import Users from "./Components/Users";

const userPromise = fetch("http://localhost:3000/users").then(response => response.json());

const App = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">App Client</h1>
      <Users userPromise={userPromise}></Users>
    </div>
  );
};

export default App;
