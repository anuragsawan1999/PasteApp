import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () =>{

    const {id} = useParams();

    const allPastes = useSelector((state)=> state.paste.pastes)

    const paste = allPastes.filter((p)=> p._id === id )[0]
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.35)]max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
        <input
          className="flex flex-row gap-7 place-content-between"
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button onClick={createPaste} className="border-1 p-2 rounded-2xl">
          {pasteId ? "Update paste" : "Create My pasts"}
        </button> */}
      </div>
      <div>
        <textarea
          className="  w-full
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
shadow-[0_0_30px_rgba(168,85,247,0.35)] "
          value={paste.content}
          placeholder="Enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
    )
}

export default ViewPaste