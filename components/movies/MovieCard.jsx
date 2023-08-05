"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BsFillPlayFill, BsCheckLg } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineInfo } from "react-icons/ai";

function MovieCard({
  data,
  handleToggleAddBtn,
  handleMovieClick,
  myListMovies,
  individualAddListBtn,
  setIndividualAddListBtn,
}) {
  useEffect(() => {
    const movieAlreadyAdded = myListMovies.some(
      (movie) => movie.id === data.id
    );
    setIndividualAddListBtn((prev) => ({
      ...prev,
      [data.id]: movieAlreadyAdded,
    }));
  }, [data.id, myListMovies]);

  const addListBtn = individualAddListBtn[data.id] || false;

  const router = useRouter();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt={data.title}
        className="cursor-pointer object-cover transition shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />

      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-100
        scale-0
        w-full
        group-hover:scale-110
        group-hover:translate-y-[4vw]
        group-hover:opacity-100
        "
      >
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <div
          className="
            z-10
            bg-zinc-800
            p-2
            lg:p-4
            absolute
            w-full
            transition
            shadow-xl
            rounded-b-md
        "
        >
          <div className="flex items-center flex-row gap-3">
            <div
              className="
              cursor-pointer
              w-6
              h-6
              lg:w-10
              lg:h-10
              bg-white
              rounded-full
              flex
              justify-center
              items-center
              hover:bg-neutral-300
              transition
            "
              onClick={() => {
                router.push(`watch/${data.id}`);
              }}
            >
              <BsFillPlayFill size={24} className="mt-[0.5px] ml-[0.5px]" />
            </div>

            <div
              className="
              cursor-pointer
              w-6
              h-6
              lg:w-10
              lg:h-10
              border
              border-white
              rounded-full
              flex
              justify-center
              items-center
              transition
              text-white
            "
              onClick={() => handleToggleAddBtn(data)}
            >
              {addListBtn ? (
                <BsCheckLg
                  size={22}
                  className="mr-[1px] md:mt-[0.5px] md:ml-[0.5px]"
                />
              ) : (
                <IoMdAdd size={22} className="md:mt-[0.5px] md:ml-[0.5px]" />
              )}
            </div>

            <div
              className="
              cursor-pointer
              w-6
              h-6
              lg:w-10
              lg:h-10
              border
              border-white
              rounded-full
              flex
              justify-center
              items-center
              transition
              text-white
              ml-auto 
              "
              onClick={() => handleMovieClick(data)}
            >
              <AiOutlineInfo size={22} />
            </div>
          </div>

          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2022</span>
          </p>
          <p className="text-white mt-2">
            <b>Title:</b> {data.title}
          </p>
          <p className="text-white mt-2">
            <b>Duration:</b> {data.duration}
          </p>
          <p className="text-white mt-2">
            <b>Genre:</b> {data.genre}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
