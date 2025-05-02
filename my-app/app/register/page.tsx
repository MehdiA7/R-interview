import React from "react";
import RegisterForm from "@/components/RegisterForm";
import { IoMdExit } from "react-icons/io";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-40">
                <h1 className="text-[41px] font-semibold mb-14">
                    Create an account
                </h1>
                <RegisterForm />
            </div>
            <div className="flex flex-row justify-center mt-25 ">
                <p className="text-gray-500">Already have an account?</p>
                <IoMdExit className="mt-1 ml-5 mr-1"/>
                <Link href="login">
                <b className="text-[13px] font-medium">Log In</b>
                </Link>
            </div>
        </>
    );
};

export default RegisterPage;
