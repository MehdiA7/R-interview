"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginCred as LoginCred, loginSchema } from "@/lib/schema/userCredential";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginCred>({
        resolver: zodResolver(loginSchema),
    });

    const sendUserData: SubmitHandler<LoginCred> = async (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(sendUserData)}>
            <div className="flex flex-col justify-center space-y-2 mb-5 w-[336px]">
                {/* Field color #f4f8f9 */}
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                    className={`bg-[#f4f8f9] h-9 rounded-md p-4 ${
                        errors.email ? "border-2 border-red-500" : null
                    }`}
                />
                <input
                    type="text"
                    placeholder="Password"
                    {...register("password")}
                    className={`bg-[#f4f8f9] h-9 rounded-md p-4 ${
                        errors.password ? "border-2 border-red-500" : null
                    }`}
                />
                <button
                    onClick={() => console.log(errors)}
                    type="submit"
                    className="bg-[#fd5b13] text-white text-[15px] border-1 border-gray-200 rounded-md w-full h-9 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Log in
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
