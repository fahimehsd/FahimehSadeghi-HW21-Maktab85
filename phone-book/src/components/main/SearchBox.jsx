import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const SearchBox = () => {
  const { contactList } = useSelector((state) => state.contact);
  const [filtered, setFiltered] = useState(contactList || []);

  useEffect(() => {
    setFiltered(contactList);
  }, [contactList]);
  const handleChange = (event) => {
    const searchResults = contactList.filter((filtered) =>
      filtered.name.toLowerCase().includes(event.target.value)
    );
    setFiltered(searchResults);
  };
  return (
    <div>
      <input
        className=" bg-zinc-200 w-[100%] rounded-xl p-1"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      />
      <div>
        {filtered.map((item) => (
          <Contact {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
