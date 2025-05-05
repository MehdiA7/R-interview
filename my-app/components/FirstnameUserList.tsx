"use client";
import { FetchAllFirstnameContentType, FetchAllFirstnameType } from "@/lib/type";
import { fetchAllFirstname } from "@/serverAction/fetchUserData";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const FirstnameUserList = () => {
    const [firstnameList, setFirstnameList] =
        useState<FetchAllFirstnameContentType[]>();

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const response: FetchAllFirstnameType = await fetchAllFirstname();

        if (!response.access) return redirect("/login");

        setFirstnameList(response.body?.content);

    };
    return (
        <div className="flex flex-col items-center">
            {firstnameList &&
                firstnameList.map((f) => (
                    <button
                        key={f.id}
                        className="bg-[#fd5b13] w-40 mb-5 text-white rounded-2xl"
                    >
                        {f.firstname}
                    </button>
                ))}
        </div>
    );
};
{/* <button onClick={getUserData} className="bg-red-600 w-10 h-10">
    TEST
</button>; */}
export default FirstnameUserList;
