import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
  const { state, login, logout } = useContext(AppContext);

  return (
    <div>
      <h1>Home</h1>
      {state.isAuthenticated ? (
        <div>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: "John Doe" })}>Login</button>
      )}
    </div>
  );
}

export default Home;
