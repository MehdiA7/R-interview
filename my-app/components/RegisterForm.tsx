"use client";
import React, { useState } from "react";
import { FaStoreAlt, FaUserAstronaut } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { NewUser, newUserSchema } from "@/lib/schema/userCredential";
import { createANewUser } from "@/serverAction/fetchConnection";
import { redirect } from "next/navigation";
import { serverActionResponse } from "@/lib/type";

// RESPONSE OF THIS COMPONENT
// {
//  type: "Agent",
//  firstname: "Mehdi",
//  country: "Belgium",
//  email: "m@m.com",
//  industry: "Energy",
//  phone: "049583920",
//  password: "12345678",
//  policy: true
//  };

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema),
    });

    const [emailIsTaken, setEmailIsTaken] = useState(false);

    const sendUserData: SubmitHandler<NewUser> = async (data) => {
        const response: serverActionResponse = await createANewUser(data);

        if (!response.success) return setEmailIsTaken(true);

        redirect("/login");
    };

    return (
        <form onSubmit={handleSubmit(sendUserData)}>
            {/* BUTTON AREA */}
            <Controller
                name="type"
                control={control}
                render={({ field }) => (
                    <div className="flex flex-row space-x-4 mb-5">
                        <button
                            type="button"
                            className={`flex flex-row items-center justify-center ${
                                field.value === "Merchant"
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            } w-40 h-10 
                    rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300
                    ${
                        errors.type
                            ? "animate-bounce border-2 border-red-600"
                            : null
                    }
                    `}
                            onClick={() => field.onChange("Merchant")}
                        >
                            <FaStoreAlt className="mr-2" />
                            Merchant
                        </button>

                        <button
                            type="button"
                            className={`flex flex-row items-center justify-center ${
                                field.value === "Agent"
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            } w-40 h-10 
                        rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300
                        ${
                            errors.type
                                ? "animate-bounce border-2 border-red-600"
                                : null
                        }`}
                            onClick={() => field.onChange("Agent")}
                        >
                            <FaUserAstronaut className="mr-2" />
                            Agent
                        </button>
                    </div>
                )}
            />
            {/* INPUT AREA */}
            <div className="flex flex-col justify-center space-y-2 mb-5">
                {/* Field color #f4f8f9 */}
                <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstname")}
                    className={`bg-[#f4f8f9] h-9 rounded-md p-4 ${
                        errors.firstname ? "border-2 border-red-500" : null
                    }`}
                />
                <select
                    {...register("country")}
                    className={`bg-[#f4f8f9] rounded-md pl-4 pr-4 h-9 ${
                        errors.country ? "border-2 border-red-500" : null
                    }`}
                >
                    <option value="Select a country">
                        Where your company based ?
                    </option>
                    <option value="Belgium">Belgium</option>
                    <option value="France">France</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="email"
                    placeholder="Business E-mail"
                    {...register("email")}
                    className={`bg-[#f4f8f9] h-9 rounded-md p-4 ${
                        errors.email || emailIsTaken
                            ? "border-2 border-red-500"
                            : null
                    }`}
                />
                {emailIsTaken && (
                    <p className="text-sm animate-bounce text-red-600">
                        This email is taken !
                    </p>
                )}
                <select
                    {...register("industry")}
                    className={`bg-[#f4f8f9] rounded-md pl-4 pr-4 h-9 ${
                        errors.industry ? "border-2 border-red-500" : null
                    }`}
                >
                    <option value="Select a country">
                        Please select an Industry
                    </option>
                    <option value="Finance">Finance</option>
                    <option value="Medical">Medical</option>
                    <option value="Auto">Auto</option>
                    <option value="Energy">Energy</option>
                </select>
                <input
                    type="phone"
                    placeholder="Phone number"
                    {...register("phone")}
                    className={`bg-[#f4f8f9] h-9 rounded-md p-4 ${
                        errors.phone ? "border-2 border-red-500" : null
                    }`}
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className={`bg-[#f4f8f9] h-9 rounded-md p-4 ${
                        errors.password ? "border-2 border-red-500" : null
                    }`}
                />
                <div className="flex flex-row">
                    <input
                        type="checkbox"
                        {...register("policy")}
                        className="accent-[#f4f8f9]"
                    />
                    <p
                        className={`text-[13px] ml-2 ${
                            errors.policy ? "text-red-500" : null
                        }`}
                    >
                        I accept the <b>Privacy Policiy</b>{" "}
                    </p>
                </div>
            </div>

            <button
                onClick={() => console.log(errors)}
                type="submit"
                className="bg-[#fd5b13] text-white text-[15px] border-1 border-gray-200 rounded-md w-full h-9 hover:bg-white hover:text-black transition-all duration-300"
            >
                Create an Account
            </button>
        </form>
    );
};

export default RegisterForm;
