import React from "react";

function MenuMobile() {
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white flex flex-col">
          <p href="home" className="list-none hover:underline ">
            HOME
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
