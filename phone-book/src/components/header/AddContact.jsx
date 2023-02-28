import React, { useState } from "react";

import AddContactModal from "../modal/AddContactModal";
const AddContact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className=" text-[4rem] flex justify-end pr-5 text-purple-800 items-center">
      <button onClick={() => setShowModal(true)}>+</button>
      {showModal && <AddContactModal setShowModal={setShowModal} />}
    </header>
  );
};

export default AddContact;
