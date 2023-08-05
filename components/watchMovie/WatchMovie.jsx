"use client";
import React, { useEffect } from "react";
import data from "@/data/movies.json";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

function WatchMovie({ id }) {
  const router = useRouter();
  const movie = data.find((movie) => movie.id == id);
  useEffect(() => {
    console.log(movie);
  }, []);
  return (
    <div className="w-full h-screen">
      {movie ? (
        <>
          <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
            <AiOutlineArrowLeft
              className="text-white cursor-pointer"
              size={40}
              onClick={() => {
                router.push("/home");
              }}
            />
            <p className="text-white text-xl md:text-3xl">
              Watching:
              <b className="ml-2">{movie.title} </b>
            </p>
          </nav>
          <video
            poster={movie.thumbnailUrl}
            src={movie.videoUrl}
            autoPlay
            muted
            controls
            loop
            className="
          h-[100vh] w-full object-cover
          "
          ></video>
        </>
      ) : (
        <p className="text-white flex items-center flex-col justify-center w-full h-screen text-6xl">
          Movie not found!
          <span
            className="font-semibold mt-4 text-white hover:underline text-4xl  cursor-pointer"
            onClick={() => {
              router.push("/home");
            }}
          >
            return to home page
          </span>
        </p>
      )}
    </div>
  );
}

export default WatchMovie;
