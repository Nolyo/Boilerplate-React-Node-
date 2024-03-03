import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import Link from "../components/Link";

function Home() {
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
          Welcome in Frontend
        </motion.h1>

        <motion.ul
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="list-disc text-left"
        >
          <li>Vite</li>
          <li>React</li>
          <li>Typescript</li>
          <li>
            TailwindCSS
            <ul className="list-disc ml-5">
              <li>HeadlessUI</li>
              <li>Heroicons</li>
            </ul>
          </li>
        </motion.ul>
        <Link
          href="https://github.com/Nolyo/Boilerplate-React-Node-"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
          {/* icon target blank */}
          <DocumentPlusIcon className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3 items-center"
      ></motion.div>
    </div>
  );
}

export default Home;
