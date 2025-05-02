"use client";
import React, { useState } from "react";
import { FaStoreAlt, FaUserAstronaut } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { NewUser, newUserSchema } from "@/lib/schema/newUser";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema),
    });

    const createANewUser: SubmitHandler<NewUser> = (data) => {
        console.log(data);
    };

    // Button Area
    const [typeButton, setTypeButton] = useState("");
    const selectButton = (payload: string) => {
        setTypeButton(payload);
    };

    return (
        <form>
            <div className="flex flex-row space-x-4 mb-5">
                <button
                    className={`flex flex-row items-center justify-center ${
                        typeButton === "Merchant"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                    } w-40 h-10 
                    rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300`}
                    onClick={(e) => selectButton("Merchant")}
                >
                    <FaStoreAlt className="mr-2" />
                    Merchant
                </button>
                <button
                    className={`flex flex-row items-center justify-center ${
                        typeButton === "Agent"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                    } w-40 h-10 
                        rounded-2xl border-1 border-gray-400 hover:bg-black hover:text-white transition-all duration-300`}
                    onClick={(e) => selectButton("Agent")}
                >
                    <FaUserAstronaut className="mr-2" />
                    Agent
                </button>
            </div>
            <div className="flex flex-col justify-center space-y-2 ">
                {/* Field color #f4f8f9 */}
                <input
                    required
                    type="text"
                    placeholder="First Name"
                    {...register("firstname")}
                    className="bg-[#f4f8f9] h-9 rounded-md p-4"
                />
                <select
                    required
                    {...register("country")}
                    className="bg-[#f4f8f9] rounded-md pl-4 pr-4 h-9"
                >
                    <option value="Select a country">
                        Where your company based ?
                    </option>
                    <option value="Belgium">Belgium</option>
                    <option value="France">France</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    required
                    type="text"
                    placeholder="Business E-mail"
                    {...register("email")}
                    className="bg-[#f4f8f9] h-9 rounded-md p-4"
                />
                <select
                    required
                    {...register("industry")}
                    className="bg-[#f4f8f9] rounded-md pl-4 pr-4 h-9"
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
                    required
                    type="text"
                    placeholder="Phone number"
                    {...register("phone")}
                    className="bg-[#f4f8f9] h-9 rounded-md p-4"
                />
                <input
                    required
                    type="text"
                    placeholder="Password"
                    {...register("password")}
                    className="bg-[#f4f8f9] h-9 rounded-md p-4"
                />
                <div className="flex flex-row">
                    <input type="checkbox" {...register("policy")} className="accent-[#f4f8f9]" />
                    <p className="text-[13px] ml-2">I accept the <b>Privacy Policiy</b> </p>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
