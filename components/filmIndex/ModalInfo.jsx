"use client";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillPlayFill, BsCheckLg } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/navigation";

function ModalInfo({
  modal,
  selectedMovie,
  setModal,
  myListMovies,
  individualAddListBtn,
  setIndividualAddListBtn,
  handleToggleAddBtn,
}) {
  const router = useRouter();
  const [addListBtn, setAddListBtn] = useState(false); // Agrega un estado local para el botón

  useEffect(() => {
    // Actualiza el estado local al valor correspondiente del estado individual
    setAddListBtn(individualAddListBtn[selectedMovie.id] || false);
  }, [selectedMovie.id, individualAddListBtn]);

  // Función para cerrar el modal y actualizar el estado individual cuando se cierre
  const handleCloseModal = () => {
    setModal(false);
    setIndividualAddListBtn((prev) => ({
      ...prev,
      [selectedMovie.id]: addListBtn,
    }));
  };
  return (
    <div
      className={`flex justify-center items-center transition duration-300 bg-black bg-opacity-80 overflow-x-hidden overflow-y-hidden fixed z-50 inset-0 ${
        modal ? "" : "hidden"
      }`}
    >
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md ${
            modal ? "scale-100" : "scale-0"
          }`}
        >
          <div className="relative h-96">
            {selectedMovie && (
              <>
                <video
                  className="w-full brightness-[60%] object-cover h-full"
                  autoPlay
                  loop
                  muted
                  poster={selectedMovie.thumbnailUrl}
                  src={selectedMovie.videoUrl}
                ></video>
                <div
                  className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black cursor-pointer  flex items-center justify-center bg-opacity-70"
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  <RxCross2 className="text-white" size={20} />
                </div>

                <div className="absolute bottom-[10%] left-10">
                  <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                    {selectedMovie.title}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      className="
                      bg-white
                      text-black
                      rounded-md
                      py-1 md:py-2
                      px-1 md:px-2
                      pr-2 md:pr-4
                      font-semibold
                      flex
                      items-center
                      justify-center
                      text-xs md:text-lg
                      hover:bg-opacity-90
                      transition
                      "
                      onClick={() => {
                        router.push(`watch/${selectedMovie.id}`);
                      }}
                    >
                      <BsFillPlayFill size={22} />
                      Play
                    </button>
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
                      onClick={() => {
                        handleToggleAddBtn(selectedMovie);
                      }}
                    >
                      {addListBtn ? (
                        <BsCheckLg
                          size={22}
                          className="mr-[1px] md:mt-[0.5px] md:ml-[0.5px]"
                        />
                      ) : (
                        <IoMdAdd
                          size={22}
                          className="md:mt-[0.5px] md:ml-[0.5px]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="py-8 px-12">
            <p className="text-green-400 font-bold flex gap-4">
              New
              <span className="text-white">
                <b>Duration:</b> {selectedMovie.duration}
              </span>
              <span className="text-white">
                <b>Genre:</b> {selectedMovie.genre}
              </span>
            </p>
            <p className="mt-6 text-white font-semibold">
              {selectedMovie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;
