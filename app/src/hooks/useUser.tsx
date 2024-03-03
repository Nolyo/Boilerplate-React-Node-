import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchAPIAuth } from "../helpers/fetch";

const UserContext = createContext({
  user: null,
  logout: () => {},
  isLogged: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAPIAuth({ endpoint: "/users/me" });
        if (data.error) {
          return;
        }
        setUser(data);
      } catch (error) {
        console.error("An error occurred fetching the user", error);
      }
    })();
  }, []);

  function isLogged() {
    return !!user;
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "useUser should be used within a UserProvider. Wrap a parent component in <UserProvider> to fix this error."
    );
  }

  return context;
};
