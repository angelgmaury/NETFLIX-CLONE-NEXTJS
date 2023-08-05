"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function LogOut() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUser(storedUser);
    }
  }, []);

  const router = useRouter();

  const handleLogOut = () => {
    localStorage.clear("user");
    router.push("/");
  };

  const variantsForLogOut = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <AnimatePresence>
      {/* Envuelve todo el contenido con AnimatePresence */}
      {user.username && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variantsForLogOut}
          transition={{ duration: 0.8 }}
          className="fixed right-14 mt-2 bg-black w-52 pr-20 h-32 rounded-md py-5 z-50"
        >
          <figure className="flex gap-6 items-center">
            <Image
              src="/images/default-slate.png"
              alt="Avatar-User"
              priority={true}
              height={30}
              width={30}
              className="rounded-md relative left-4"
            />
            <p className="text-sm font-semibold ml-1">{user.username}</p>
          </figure>
          <hr className="w-52 mt-4 border-zinc-700 border-[1.5px]" />
          <p
            className="w-52 text-center text-zinc-200 mt-[16px] cursor-pointer text-sm hover:text-zinc-100 hover:underline"
            onClick={handleLogOut}
          >
            Sign out of Netflix
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LogOut;
