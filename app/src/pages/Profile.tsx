import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import Link from "../Components/Link";
import { useEffect, useState } from "react";
import { fetchAPIAuth } from "../fetch";
import { User } from "../types";

function Profile() {
  const [user, setUser] = useState<User | null>();

  async function fetchMe() {
    const data = await fetchAPIAuth({
      endpoint: "/users/me",
      method: "GET",
    });
    setUser(data);
  }

  useEffect(() => {
    void fetchMe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
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
          Welcome {user.name}
        </motion.h1>

        <motion.ul
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="list-disc text-left"
        >
          <li>Email: {user.email}</li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Profile;
