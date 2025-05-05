"use client";
import { FetchFirstnameContentType, FetchFirstnameType } from "@/lib/type";
import { fetchFirstname } from "@/serverAction/fetchUserData";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const HomePage = () => {
    const [firstnameList, setFirstnameList] =
        useState<FetchFirstnameContentType[]>();

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const response: FetchFirstnameType = await fetchFirstname();

        if (!response.access) return redirect("/login");

        setFirstnameList(response.body?.content);

        console.log(response.body?.content);
    };

    return (
        <div>
            <button onClick={getUserData} className="bg-red-600 w-10 h-10">
                TEST
            </button>
            <div className="flex flex-col">
                {firstnameList &&
                    firstnameList.map((f) => <button>{f.firstname}</button>)}
            </div>
        </div>
    );
};

export default HomePage;
