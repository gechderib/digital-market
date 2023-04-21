import React from "react";
const HomeNav = () => {
  return (
    <div className="bg-white fixed w-full z-10">
      <div className="flex justify-between px-4 pt-4 pb-2">
        <div className="flex self-center gap-2 text-gray-700">
          <span className="material-symbols-outlined self-center text-3xl">
            add_shopping_cart
          </span>
          <p className="text-2xl font-bold self-center">Shopcart</p>
        </div>
        <div className="flex gap-5 text-black self-center cursor-pointer sm:hidden">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </div>
        <div className="sm:flex gap-5 text-primary self-center md:w-2/5 hidden">
          <div className="relative sm:w-3/4">
            <input
              className="py-2  pl-5 w-full bg-slate-100 rounded-3xl text-gray-700 outline-none"
              placeholder="search product"
            />
            <span className="material-symbols-outlined absolute top-1/4 right-5 cursor-pointer text-gray-400">
              search
            </span>
          </div>
          <div className="flex self-center gap-1 cursor-pointer">
            <span className="material-symbols-outlined">person</span>
            <p className="font-serif">Account</p>
          </div>
          <div className="flex self-center gap-1 cursor-pointer">
            <span className="material-symbols-outlined self-center">
              add_shopping_cart
            </span>
            <p className="font-serif ">Cart</p>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-gray-100 self-center"></div>
    </div>
  );
};

export default HomeNav;
