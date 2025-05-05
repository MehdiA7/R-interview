import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

const LogoHeader = () => {
    return (
        <div className="flex items-center justify-center ">
            <Link href={"/home"}>
                <Image src={logo} alt="logo" className="w-20"></Image>
            </Link>
        </div>
    );
};

export default LogoHeader;
