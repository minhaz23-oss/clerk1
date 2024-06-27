'use client'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [name,setName] = useState<string | null>();
  
  const handlePost = async () => {
    try {
      const res = await axios.post('/api/signup',{name: name})
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <main className="w-full h-screen flex justify-center items-center">
       <SignedIn>
       
        <div className=" flex flex-col gap-5">

         <UserButton/>
         <input type="text" className="text-black font-bold p-3 " onChange={(e) => setName(e.target.value)}/>
         <button onClick={handlePost} className=" px-5 py-2 bg-white text-black rounded-md">Post</button>
        </div>

       </SignedIn>
       <SignedOut>
        <div className=" flex gap-4 mt-4">

         <Link className=" px-5 py-2 bg-white text-black font-bold rounded-md" href='/sign-in'>Signin</Link>
         <Link className=" px-5 py-2 bg-white text-black font-bold rounded-md" href='/sign-up'>Signup</Link>
        </div>
       </SignedOut>
    </main>
  );
}
