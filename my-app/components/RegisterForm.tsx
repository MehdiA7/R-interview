"use client";
import React, { useState } from "react";
import { FaStoreAlt, FaUserAstronaut } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { NewUser, newUserSchema } from "@/lib/schema/newUser";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema)
    });

    const [typeButton, setTypeButton] = useState("");

    const createANewUser: SubmitHandler<NewUser> = (data) => {
        console.log(data);
    };

    const selectButton = (payload: string) => {
        setTypeButton(payload);
    }

    return (
        <div>
            <div className="flex flex-row space-x-4">
                <button
                    className={`flex flex-row items-center justify-center ${typeButton === "Merchant" ? "bg-black text-white" : "bg-white text-black"} w-40 h-10 
                    rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300`}
                onClick={(e) => selectButton("Merchant")}
                >
                    <FaStoreAlt className="mr-2" />
                    Merchant
                </button>
                <button
                    className={`flex flex-row items-center justify-center ${typeButton === "Agent" ? "bg-black text-white" : "bg-white text-black"} w-40 h-10 
                        rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300`}
                    onClick={(e) => selectButton("Agent")}
                >
                    <FaUserAstronaut className="mr-2" />
                    Agent
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
