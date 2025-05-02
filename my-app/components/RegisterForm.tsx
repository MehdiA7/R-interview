"use client";
import React from "react";
import { FaStoreAlt, FaUserAstronaut } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form"

const RegisterForm = () => {
    return (
        <div>
            <div className="flex flex-row space-x-4">
                <button
                    className="flex flex-row items-center justify-center bg-black text-white w-40 h-10 
                rounded-2xl border-1 border-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                >
                    <FaStoreAlt className="mr-2" />
                    Merchant
                </button>
                <button
                    className="flex flex-row items-center justify-center bg-white text-black w-40 h-10 
                rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300"
                >
                    <FaUserAstronaut className="mr-2" />
                    Agent
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
