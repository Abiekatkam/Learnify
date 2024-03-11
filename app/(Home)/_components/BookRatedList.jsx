import BookCard from "@/components/cards/BookCard";
import React from "react";

const BookRatedList = () => {
  return (
    <div className="w-full h-fit min-h-[400px] flex items-start justify-start gap-6 flex-wrap px-8 lg:px-0">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default BookRatedList;
