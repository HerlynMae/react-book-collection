import React from "react";

const AddCollection = ({ text, AddCollection }) => {
  return (
    <>
      <button
        className="bg-blue-800 hover:bg-blue-500 p-2 rounded-xl text-white"
        onClick={AddCollection}
      >
        {text}
      </button>
    </>
  );
};

export default AddCollection;
