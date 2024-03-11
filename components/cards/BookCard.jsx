import React from "react";
import Book from "@/public/icons/book.svg";
import Image from "next/image";

const BookCard = () => {
  return (
    <div className="lg:w-[310px] w-full h-[345px] lg:h-[330px] relative group">
      <div className="w-[95%] h-[95%] absolute bottom-0 right-0 bg-purple-200 rounded-lg group-hover:bg-purple-300 transition-all ease-in duration-200" />
      <div className="w-[95%] h-[95%] absolute top-0 left-0 bg-slate-100 border border-slate-500 rounded-lg p-2 flex flex-col items-start gap-3">
        <div className="w-full h-[55%] border border-slate-500 object-contain rounded-lg overflow-hidden">
          <img
            src="https://www.newline.co/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fassets.fullstack.io%2Fn%2F20221019030519248_fs-react-typescript-v1.png&w=1920&q=75"
            alt="book"
            className="w-full h-full group-hover:scale-110 transition-all ease-in duration-200"
          />
        </div>
        <div className="w-full h-[40%] flex flex-col items-start justify-between px-2">
          <h1 className="text-xl text-slate-700 font-bold leading-5 group-hover:text-slate-900">
            Learn to Read Biblical Hebrew. aala motha shana
          </h1>

          <div className="w-full h-fit flex flex-row justify-between items-center">
            <div className="w-fit h-fit flex flex-col items-start gap-0">
              <h1 className="text-sm capitalize font-bold text-slate-600">
                abie katkam
              </h1>
              <p className="w-fit h-fit flex flex-row items-center gap-2 text-sm font-semibold text-slate-500">
                <span className="text-sm w-4 h-4 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </span>{" "}
                <span>5 / 5 (3 ratings)</span>
              </p>
            </div>
            <button className="w-12 h-12 rounded-full border-2 outline-none border-slate-500 flex items-center justify-center hover:shadow-xl active:scale-90 transition-all ease-in-out duration-200">
              <Image src={Book} alt="book-button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
