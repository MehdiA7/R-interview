import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

const LoadingLogo = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <Image src={logo} alt="logo" className="animate-spin w-25 "></Image>
        </div>
    );
};

export default LoadingLogo;
