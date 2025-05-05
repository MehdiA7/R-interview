import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

const LogoHeader = () => {
    return (
        <div className="mx-auto inset-x-0 fixed w-20 top-5">
            <Link href={"/home"}>
                <Image src={logo} alt="logo"></Image>
            </Link>
        </div>
    );
};

export default LogoHeader;
