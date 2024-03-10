import React from "react";

const AuthorCommentCard = () => {
  return (
    <div className="lg:w-[90%] w-full h-fit min-h-[300px] p-6 border border-slate-400 rounded-lg shadow-xl">
      <div className="lg:float-left float-none flex lg:w-[230px] lg:h-[210px] flex-col items-center gap-3 mr-4">
        <div className="w-[170px] h-[170px] rounded-full object-contain ring-4 ring-fuchsia-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAiiZe77J7T8WnfcpX-RThUnLqCacJIHL2A&usqp=CAU"
            alt="profile"
            className="w-full h-full rounded-full object-center"
          />
        </div>
        <p className="text-xl font-mono font-semibold ">Amit Grinson</p>
      </div>
      <div className="relative pt-6">
        <div className="lg:w-[100px] w-[80px] absolute -top-2 lg:left-56 z-10 text-4xl opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
          </svg>
        </div>
        <p className="text-start text-pretty text-lg text-slate-600">
          I didn't mean to write a book. I filled out the Fullstack writer
          survey mostly out of curiosity — would other developers be interested
          in learning about data visualization? After that, I met with Nate to
          talk about topics, then we solidified an outline, then I had written a
          whole chapter! Nate's process is so smooth, at no point did I feel
          like I was actually "writing a book".
        </p>
        <p className="text-start text-pretty text-lg text-slate-600 mt-2">
          Honestly, I would never have been able to write a book without the
          team — the accountability is great, but I also would have thrown in
          the towel at any number of obstacles that popped up: the writing &
          typesetting process, updating code easily, not to mention the
          overwhelming idea of marketing the book.
        </p>
        <p className="text-start text-pretty text-lg text-slate-600 mt-2">
          Honestly, I would never have been able to write a book without the
          team — the accountability is great, but I also would have thrown in
          the towel at any number of obstacles that popped up: the writing &
          typesetting process, updating code easily, not to mention the
          overwhelming idea of marketing the book.
        </p>
      </div>
    </div>
  );
};

export default AuthorCommentCard;
