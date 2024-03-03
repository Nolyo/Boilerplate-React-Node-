import { useState } from "react";
import { motion } from "framer-motion";
import { fetchAPI } from "../helpers/fetch";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    const data = new URLSearchParams({
      email,
      password,
    });
    const user = await fetchAPI({
      endpoint: "/users/login",
      method: "POST",
      body: data.toString(),
    });
    if (!user) {
      setError("Email or password are incorrect");
      return;
    }
    localStorage.setItem("token", user.token);
    navigate("/users/me");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3 items-center"
      >
        <motion.h1
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-5"
        >
          Login
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center text-black"
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 p-2 rounded-md"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-2 p-2 rounded-md"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Login;
