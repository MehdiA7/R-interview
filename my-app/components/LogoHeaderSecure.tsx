"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

const LogoHeaderSecure = ({}) => {
    
    // const logoutUser = async () => {
    //     const coockieStore = await cookies();
    //     coockieStore.delete("Authorization");
    //     return redirect("/login");
    // }
    return (
        <div className="flex items-center justify-center ">
            <Link href={"/home"}>
                <Image src={logo} alt="logo" className="w-20"></Image>
            </Link>
            <button 
            className="fixed right-15 bg-[#fd5b13] text-white p-2 rounded-xl">
                Log out
            </button>
        </div>
    );
};

export default LogoHeaderSecure;
