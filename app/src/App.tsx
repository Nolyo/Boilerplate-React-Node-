import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { UserProvider } from "./hooks/useUser";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<div> Users</div>} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/users/me" element={<Profile />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
