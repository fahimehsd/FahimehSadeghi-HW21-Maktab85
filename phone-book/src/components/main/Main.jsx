import React from "react";
import SearchBox from "./SearchBox";

const Main = () => {
  return (
    <main>
      <h1 className=" font-bold text-2xl mb-5 pl-5">My Contacts</h1>
      <div className=" border-y-2 p-2">
        <a className=" text-violet-800" href="#">
          All Contacts
        </a>
        <a href="#">Family</a>
        <a href="#">Friends</a>
        <a href="#">Office</a>
      </div>
      <div className=" p-4">
        <SearchBox />
      </div>
    </main>
  );
};

export default Main;
