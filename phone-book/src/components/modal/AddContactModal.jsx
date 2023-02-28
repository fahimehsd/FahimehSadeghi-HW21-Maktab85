import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getContact } from "../../app/contactSlice";
const AddContactModal = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const [phone, setPhone] = useState("");
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const [rel, setRel] = useState("");
  const relHandler = (e) => {
    setRel(e.target.value);
  };
  const [email, setEmail] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      rel,
      email
    };
    dispatch(getContact(newContact));
    setShowModal(false);
    setName("");
    setPhone("");
    setRel("");
    setEmail("");
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">New Contact</h3>
            </div>
            <div className="relative p-6">
              <form
                className="text-base flex flex-col"
                onSubmit={submitHandler}
              >
                <input
                  required
                  type="text"
                  placeholder="Name"
                  onChange={nameHandler}
                />
                <input
                  required
                  type="number"
                  placeholder="Phone Number"
                  maxLength={11}
                  minLength={11}
                  onChange={phoneHandler}
                />
                <select required onClick={relHandler}>
                  <option value="family">Family</option>
                  <option value="friend">Friend</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  onChange={emailHandler}
                />

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddContactModal;
