import { BackgroundGradient } from "@/components/other/background-gradient";
import Image from "next/image";
import React from "react";
import mask from "@/public/other/mask.svg"
const SignupPage = () => {
  return (
    <main className="grid grid-cols-12 min-h-screen">
      <aside className="relative col-span-7">
        <div className="absolute inset-0">
          <BackgroundGradient />
        </div>
        <div className="absolute mask-container pointer-events-none top-0 left-0 w-full h-svh">
          <Image src={mask} className="h-full w-full object-cover" alt="mask"/>
        </div>
      </aside>
      <aside className="col-span-5 flex justify-center items-center">
        form over here
      </aside>
    </main>
  );
};

export default SignupPage;