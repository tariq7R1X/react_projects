import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="px-3 py-1 rounded-3xl outline-none shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-3 py-1 rounded-3xl outline-none shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-3 py-1 rounded-3xl outline-none shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("purple")}
            className="px-3 py-1 rounded-3xl outline-none shadow-lg text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="px-3 py-1 rounded-3xl outline-none shadow-lg text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="px-3 py-1 rounded-3xl outline-none shadow-lg text-white"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
