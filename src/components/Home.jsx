import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=> state.paste.pastes)


   useEffect(()=>{
      if(pasteId){
        const paste = allPastes.find((p)=>p._id === pasteId)
      
        setTitle(paste.title)
        setValue(paste.content)
      }
    },[pasteId])


  function createPaste() {
      if (!title.trim() || !value.trim()) {
    alert("Title and Content cannot be empty");
    return;
  }
    const paste = {
        title : title,
        content : value,
        _id: pasteId || Date.now().toString(36),
        createdAt : new Date().toISOString(),
    }


    if (pasteId){
        //update
        dispatch(updateToPastes(paste));
    }
    else{
        //create
        dispatch(addToPastes(paste));

    }
    //after creation and updation

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-5">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="  w-[66%]
    px-5 py-4
    mt-2
    rounded-2xl
    bg-white/10
    backdrop-blur-lg
    border border-purple-400/40
    text-white
    text-lg
    placeholder:text-gray-300
    outline-none
    transition-all duration-300
    shadow-[0_0_15px_rgba(168,85,247,0.25)]
    
    focus:scale-[1.02]
    focus:border-pink-400
    focus:shadow-[0_0_30px_rgba(236,72,153,0.6)]

    hover:border-purple-300
    hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste} className="    relative overflow-hidden
    px-8 py-3
    rounded-2xl
    font-bold text-lg
    text-white
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
    shadow-[0_0_20px_rgba(168,85,247,0.6)]
    transition-all duration-300
    hover:scale-105
    hover:shadow-[0_0_35px_rgba(236,72,153,0.9)]
    active:scale-95
    before:absolute before:inset-0
    before:bg-white/20
    before:translate-x-[-100%]
    hover:before:translate-x-[100%]
    before:transition-transform
    before:duration-700
">
          {pasteId ? "Update paste" : "Create My pasts"}
        </button>
      </div>
      <div>
        <textarea
          className="   w-full
    min-h-[400px]
    mt-6
    p-5
    rounded-2xl
    bg-white/10
    backdrop-blur-lg
    border border-purple-400/40
    text-white
    text-lg
    leading-relaxed
    placeholder:text-gray-300
    outline-none
    resize-none
    transition-all duration-300

    shadow-[0_0_20px_rgba(168,85,247,0.25)]

    focus:border-pink-400
    focus:shadow-[0_0_35px_rgba(236,72,153,0.6)]
    focus:scale-[1.01]

    hover:border-purple-300
    hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
