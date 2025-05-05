import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

const Headers = () => {
    return (
        <div className="mx-auto inset-x-0 fixed w-20 top-2">
            <Image src={logo} alt="logo"></Image>
        </div>
    );
};

export default Headers;
