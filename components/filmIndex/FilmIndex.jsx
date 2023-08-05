import movies from "@/data/movies.json";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

function FilmIndex({ modal, setModal, handleMovieClick, selectedMovie }) {
  const movie = movies.map((movie) => movie);
  const video = movie[0].videoUrl;
  const poster = movie[0].thumbnailUrl;

  const router = useRouter();
  return (
    <div className={`w-full h-[56.25vw] relative`}>
      <video
        poster={poster}
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
      ></video>
      <div className="absolute top-[40%] md:top-[40%] ml-6 md:ml-16">
        <p className="text-white font-bold text-2xl md:text-5xl lg:text-6xl w-[50%] h-full drop-shadow-xl">
          {movie[0].title}
        </p>
        <p className="text-white hidden md:block mt-4 w-[75%] lg:w-[50%] ">
          {movie[0].description}
        </p>
        <div className="flex flex-row items-center mt-5 md:mt-4 gap-3">
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
              router.push(`watch/${movie[0].id}`);
            }}
          >
            <BsFillPlayFill size={22} />
            Play
          </button>
          <button
            className="
          bg-white
          text-white
          bg-opacity-30
          rounded-md
          py-1 md:py-2
          px-1 md:px-2
          font-semibold
          flex
          flex-row
          text-xs md:text-lg
          items-center
          hover:bg-opacity-20
          transition
          "
            onClick={() => handleMovieClick(movie[0])}
          >
            <AiOutlineInfoCircle className="mr-1 mt-[1px]" size={20} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmIndex;
