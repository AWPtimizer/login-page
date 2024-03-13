import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home", { state: { email } });
  };

  return (
    <div className="flex flex-col gap-4 border-2 border-gray-300 p-2 rounded-md py-16 px-10">
      <h1 className="mb-5 text-4xl">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border-2 border-gray-500 p-2 rounded-md"
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 border-gray-500 p-2 rounded-md"
          type="password"
          placeholder="Enter password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="border-2 border-gray-700 bg-slate-700" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
