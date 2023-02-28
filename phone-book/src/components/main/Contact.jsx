import React from "react";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <Link to="/details" state={{ from: { ...props } }}>
      <div className="flex justify-between border-b-2">
        <div className="flex items-center">
          <svg
            className="border-2 rounded-full my-3 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 54"
            width="50px"
            height="50px"
            fill="silver"
          >
            <path d="M 25.90625 3.28125 C 16.566406 3.492188 15.507813 10.316406 17.5 18.1875 C 17.1875 18.398438 16.550781 19.148438 16.65625 20.40625 C 16.96875 22.714844 17.914063 23.34375 18.4375 23.34375 C 18.648438 24.917969 19.390625 26.574219 20.125 27.625 C 20.648438 28.359375 20.84375 29.304688 20.84375 30.25 C 20.84375 31.089844 20.855469 30.554688 20.75 31.5 C 20.644531 31.804688 20.496094 32.082031 20.3125 32.34375 C 20.527344 33.152344 21.765625 37 26 37 C 30.335938 37 31.5 32.847656 31.625 32.34375 C 31.429688 32.085938 31.273438 31.804688 31.15625 31.5 C 31.050781 30.347656 31.03125 30.882813 31.03125 29.9375 C 31.03125 29.097656 31.359375 28.378906 31.78125 27.75 C 32.515625 26.699219 33.226563 24.917969 33.4375 23.34375 C 34.070313 23.34375 35.007813 22.714844 35.21875 20.40625 C 35.324219 19.148438 34.828125 18.398438 34.40625 18.1875 C 35.457031 15.25 37.433594 6.132813 30.71875 5.1875 C 29.984375 3.929688 28.214844 3.28125 25.90625 3.28125 Z M 33.28125 33.75 C 32.441406 35.984375 30.21875 39 26 39 C 21.777344 39 19.5625 36.039063 18.6875 33.78125 C 14.53125 36.339844 6.0625 37.125 6.0625 46 L 45.9375 46 C 45.9375 36.898438 37.507813 36.273438 33.28125 33.75 Z" />
          </svg>
          <div>
            <p className="font-bold">{props.name}</p>
            <p className="text-gray-400">{props.phone}</p>
          </div>
        </div>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="feather feather-more-vertical"
            fill="none"
            height="24"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>
    </Link>
  );
};

export default Contact;
