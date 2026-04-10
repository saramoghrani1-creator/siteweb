import { useState } from "react";
import users from "../data/users";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("entered:", username, password);
    console.log("users:", users);
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      setUser(found);
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;