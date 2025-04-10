import { ArrowUp, BookOpen } from "lucide-react";
import React from "react";
import AddCollection from "./AddCollection";
import RemoveCollection from "./RemoveCollection";

const BookCollection = () => {
  const [list, setList] = React.useState([]); //empty array
  const [title, setTitle] = React.useState(""); //values
  const [author, setAuthor] = React.useState(""); //values

  const addInput = (e, book) => {
    e.preventDefault();
    if (!book.title.trim()) {
      alert("Book title can't be empty");
      return;
      setList([...list, input]);
      setInput("");
    }
    // if (title && author) {
    //   setList([...list, { title, author }]);
    //   setTitle("");
    //   setAuthor("");
    // }
  };

  console.log(title);
  console.log(author);

  const removeInput = (key) => {
    setList(list.filter((e) => e.key && key));
  };

  return (
    <section className=" py-5">
      <div className="container">
        <div className="title text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-900 mb-3">
            My Book Collection
          </h1>
          <p className="text-blue-900">Track your reading journey</p>
        </div>
        <div className="bg-white p-5 shadow-lg rounded-xl mb-20">
          <form action="">
            <h3 className="mb-5 font-bold text-2xl">Add New Book</h3>

            <div className="flex items-center gap-5 mb-5">
              <div className="flex flex-col w-full">
                <label className="font-semibold text-md">Book Title</label>
                <input
                  className="p-2 rounded-l-xl focus:outline-none w-full border border-black/40 rounded-xl"
                  type="text"
                  placeholder="Enter book title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-semibold text-md">Author</label>
                <input
                  className="p-2 rounded-l-xl focus:outline-none w-full border border-black/40 rounded-xl"
                  type="text"
                  placeholder="Enter author name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>
            <AddCollection AddCollection={addInput} text={"Add Collection"} />
          </form>
        </div>

        {list.length === 0 ? (
          <div className="collectionList mt-56 flex flex-col justify-center items-center mb-10">
            <span>
              <BookOpen
                size={90}
                className="stroke-black/70 text-center mb-3"
              />
            </span>
            <h3 className="font-semibold text-xl">Your collection is empty</h3>
            <p>Add some books to get started</p>
          </div>
        ) : (
          <div className="collectionListDisplay grid grid-cols-3 gap-5">
            {list.map((todo, key) => {
              return (
                <div
                  className="card shadow-lg bg-white p-5 rounded-xl"
                  key={key}
                >
                  <h2 className="text-xl font-bold mb-3">{todo.title}</h2>
                  <p className="mb-3">{todo.author}</p>
                  <button
                    className="bg-red-800 hover:bg-red-500 p-2 rounded-xl text-white w-full"
                    onClick={() => removeInput(key)}
                  >
                    Remove
                  </button>
                  {/* <RemoveCollection
                    removeCollection={removeInput}
                    text={"Remove"}
                  /> */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookCollection;
