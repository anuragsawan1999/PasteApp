import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const handleShare = (paste) => {
    const shareUrl = `${window.location.origin}/pastes/${paste._id}`;

    navigator.clipboard.writeText(shareUrl);

    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: "Check out this paste",
        url: shareUrl,
      });
    } else {
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div
      className=" min-h-screen
    w-full
    p-6
    mt-5
    rounded-3xl

    bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950
    relative
    overflow-hidden

    shadow-[0_0_60px_rgba(168,85,247,0.25)]"
    >
      <input
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
    w-full
    px-5 py-3
    mb-5
    rounded-2xl
    bg-white/10
    backdrop-blur-lg
    border border-purple-400/40
    text-white
    placeholder:text-gray-300
    outline-none
    transition-all duration-300

    shadow-[0_0_15px_rgba(168,85,247,0.25)]

    focus:scale-[1.02]
    focus:border-pink-400
    focus:shadow-[0_0_30px_rgba(236,72,153,0.6)]

    hover:border-purple-300
    hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
  "
      />

      <div className=" flex flex-col gap-5 mt-1.5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="border"
                key={paste?._id}
                className="
          relative
          p-5
          rounded-2xl
          bg-white/10
          backdrop-blur-lg
          border border-white/10
          text-white

          shadow-[0_0_25px_rgba(168,85,247,0.15)]
          transition-all duration-300

          hover:scale-[1.02]
          hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]
          hover:border-pink-400/40
        "
              >
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button
                    className="   px-4 py-2
    rounded-xl
    bg-gradient-to-r from-pink-500 to-purple-500
    text-white
    font-semibold
    text-sm

    shadow-[0_0_15px_rgba(236,72,153,0.4)]
    transition-all duration-300

    hover:scale-105
    hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]
    active:scale-95"
                  >
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button
                    className=" px-4 py-2
    rounded-xl
    bg-gradient-to-r from-cyan-500 to-blue-500
    text-white
    font-semibold
    text-sm

    shadow-[0_0_15px_rgba(34,211,238,0.4)]
    transition-all duration-300

    hover:scale-105
    hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
    active:scale-95"
                  >
                    <a href={`/pastes/${paste?._id}`}> View</a>
                  </button>
                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="  px-4 py-2
    rounded-xl
    bg-gradient-to-r from-red-500 to-pink-600
    text-white
    font-semibold
    text-sm

    shadow-[0_0_15px_rgba(239,68,68,0.4)]
    transition-all duration-300

    hover:scale-105
    hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]
    hover:animate-pulse

    active:scale-95"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copied to clipboard");
                    }}
                    className=" px-4 py-2
    rounded-xl
    bg-gradient-to-r from-emerald-400 to-teal-500
    text-white
    font-semibold
    text-sm

    shadow-[0_0_15px_rgba(16,185,129,0.4)]
    transition-all duration-300

    hover:scale-105
    hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]

    active:scale-95"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleShare(paste)}
                    className="
    px-5 py-2
    rounded-2xl
    font-semibold
    text-white
    bg-gradient-to-r from-indigo-500 to-pink-500
    hover:scale-105
    transition-all duration-300
  "
                  >
                    Share
                  </button>
                </div>
                <div className="ml-140 mt-6">
                  {" "}
                  {new Date(paste.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
