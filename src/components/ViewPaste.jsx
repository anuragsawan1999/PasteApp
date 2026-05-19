import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

  // Agar paste nahi mila
  if (!paste) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-2xl">
        Paste not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      {/* Title Section */}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
        <input
          className="w-full bg-transparent text-2xl font-bold outline-none"
          type="text"
          value={paste?.title}
          disabled
        />
      </div>

      {/* Content Section */}
      <div>
        <textarea
          className="
            w-full
            max-w-6xl
            mx-auto
            block
            min-h-[500px]
            mt-6
            p-6
            rounded-3xl
            bg-white/10
            backdrop-blur-lg
            border border-purple-400/40
            text-white
            text-lg
            leading-relaxed
            outline-none
            resize-none
            shadow-[0_0_30px_rgba(168,85,247,0.35)]
          "
          value={paste?.content}
          placeholder="Enter content here"
          disabled
          rows={20}
        />
      </div>

      {/* Created Date */}
      <div className="text-center mt-6 text-gray-300 text-lg">
        Created at:{" "}
        {new Date(paste?.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

export default ViewPaste;