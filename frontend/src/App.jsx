import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-center items-center min-h-screen gap-16">
        {/* Added gap-16 to create more space between the two boxes */}
        <div className="content-box w-full max-w-lg p-4">
          <h1 className="text-4xl font-bold uppercase break-words text-center md:text-left">
            Convert image to video
          </h1>
          <h1 className="text-3xl text-green-700 font-bold mb-6 uppercase break-words text-center md:text-left">
            Paste the URL
          </h1>
          <form action="" className="flex flex-col justify-start items-center md:items-start">
            <input
              type="text"
              placeholder="Paste URL"
              className="input w-4/5 h-12 px-4 mb-4 rounded-3xl border-[3px] border-green-800 bg-black"
            />
            <button className="btn w-4/5 h-12 text-white font-semibold rounded-3xl hover:bg-green-900">
              Generate the video
            </button>
          </form>
        </div>
        <div className="video-preview w-full md:w-1/3 h-[60vh] bg-white border rounded-3xl flex justify-center items-center">
          {/* Placeholder content for the video preview */}
          <span className="text-black font-bold">Video Preview Area</span>
        </div>
      </div>
    </>
  );
}

export default App;
