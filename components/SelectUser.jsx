"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const images = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

function SelectUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUser(storedUser);
    }
  }, []);

  const router = useRouter();

  const randomIndex = user.username
    ? user.username.charCodeAt(user.username.length - 1) % images.length
    : 0;

  const imgSrc = images[randomIndex];

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[90vh] text-center">
      <h2 className="text-white  text-5xl mb-5 tracking-[2px]">
        Who's watching?
      </h2>
      <Image
        src={imgSrc}
        alt="Avatar-Image"
        height={160}
        width={160}
        className="cursor-pointer imageAvatar"
        priority={true}
        onClick={() => {
          router.push("/home");
        }}
      />
      <p className="text-zinc-300 text-2xl mt-2">{user.username}</p>
    </div>
  );
}

export default SelectUser;
