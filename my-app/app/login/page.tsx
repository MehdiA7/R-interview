import LoginForm from "@/components/LoginForm";
import LogoHeader from "@/components/LogoHeader";
import Link from "next/link";
import React from "react";
import { IoMdExit } from "react-icons/io";

const LoginPage = () => {
    return (
        <>
            <LogoHeader/>
            <div className="flex flex-col justify-center min-h-screen items-center">
                <div className="flex flex-col items-center justify-center ">
                    <h1 className="text-[41px] font-semibold mb-25">Log in</h1>
                    <LoginForm />
                </div>
                <div className="flex flex-row justify-center mt-25">
                    <p className="text-gray-500">No account ?</p>
                    <IoMdExit className="mt-1 ml-5 mr-1" />
                    <Link href="register">
                        <b className="text-[13px] font-medium">Register</b>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
