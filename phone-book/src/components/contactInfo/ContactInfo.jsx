import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ContactInfo = (props) => {
  //const { contactList } = useSelector((state) => state.contact);
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  const [name, setName] = useState(from.name);
  const [email, setEmail] = useState(from.email);
  const [phone, setPhone] = useState(from.phone);
  const [rel, setRel] = useState(from.rel);
  const editHandler = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setPhone(e.target.value);
    setRel(e.target.value);
  };
  const removeHandler = () => {
    setName("");
    setEmail("");
    setPhone("");
    setRel("");
  };
  return (
    <div>
      <div className="flex justify-end m-3">
        <button onClick={editHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.9445 14.1875L9.94446 10.1875M13.9445 14.1875L8.946 19.1859C8.28735 19.8446 7.48784 20.3646 6.56993 20.5229C5.64311 20.6828 4.49294 20.736 3.94444 20.1875C3.39595 19.639 3.44915 18.4888 3.609 17.562C3.76731 16.6441 4.28735 15.8446 4.946 15.1859L9.94446 10.1875M13.9445 14.1875C13.9445 14.1875 16.9444 11.1875 14.9444 9.1875C12.9444 7.1875 9.94446 10.1875 9.94446 10.1875M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5"
              stroke="gray"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button onClick={removeHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 11V17"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11V17"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7H20"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center border-2 rounded-full m-auto w-[33%] mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 56"
          width="150px"
          height="150px"
          fill="silver"
        >
          <path d="M 25.90625 3.28125 C 16.566406 3.492188 15.507813 10.316406 17.5 18.1875 C 17.1875 18.398438 16.550781 19.148438 16.65625 20.40625 C 16.96875 22.714844 17.914063 23.34375 18.4375 23.34375 C 18.648438 24.917969 19.390625 26.574219 20.125 27.625 C 20.648438 28.359375 20.84375 29.304688 20.84375 30.25 C 20.84375 31.089844 20.855469 30.554688 20.75 31.5 C 20.644531 31.804688 20.496094 32.082031 20.3125 32.34375 C 20.527344 33.152344 21.765625 37 26 37 C 30.335938 37 31.5 32.847656 31.625 32.34375 C 31.429688 32.085938 31.273438 31.804688 31.15625 31.5 C 31.050781 30.347656 31.03125 30.882813 31.03125 29.9375 C 31.03125 29.097656 31.359375 28.378906 31.78125 27.75 C 32.515625 26.699219 33.226563 24.917969 33.4375 23.34375 C 34.070313 23.34375 35.007813 22.714844 35.21875 20.40625 C 35.324219 19.148438 34.828125 18.398438 34.40625 18.1875 C 35.457031 15.25 37.433594 6.132813 30.71875 5.1875 C 29.984375 3.929688 28.214844 3.28125 25.90625 3.28125 Z M 33.28125 33.75 C 32.441406 35.984375 30.21875 39 26 39 C 21.777344 39 19.5625 36.039063 18.6875 33.78125 C 14.53125 36.339844 6.0625 37.125 6.0625 46 L 45.9375 46 C 45.9375 36.898438 37.507813 36.273438 33.28125 33.75 Z" />
        </svg>
      </div>

      <div className="flex flex-col p-5">
        <label htmlFor="name">Name:</label>
        <input value={name} />
        <label htmlFor="phone">Phone Number:</label>
        <input value={phone} />
        <label htmlFor="rel">Relationship:</label>
        <select name="rel" value={rel}>
          <option value="family">Family</option>
          <option value="friend">Friend</option>
          <option value="office">Office</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input value={email} />
      </div>
    </div>
  );
};

export default ContactInfo;
