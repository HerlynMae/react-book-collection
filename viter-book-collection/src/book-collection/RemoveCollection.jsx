import React from "react";

const RemoveCollection = (text, removeCollection) => {
  return (
    <>
      <button
        className="bg-red-800 hover:bg-red-500 p-2 rounded-xl text-white w-full"
        onClick={() => removeCollection(key)}
      >
        {text}
      </button>
    </>
  );
};

export default RemoveCollection;
