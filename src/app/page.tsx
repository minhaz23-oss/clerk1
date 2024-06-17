import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
       <SignedIn>
        <UserButton/>
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
