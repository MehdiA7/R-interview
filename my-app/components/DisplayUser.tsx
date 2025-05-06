"use client";
import { FetchUserContent } from "@/lib/type";
import { fetchUser } from "@/serverAction/fetchUserData";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";
import userProfile from "@/public/userProfile.png";
import LoadingLogo from "./LoadingLogo";

type DisplayUserProps = {
    id: number;
};

const DisplayUser: FC<DisplayUserProps> = ({ id }) => {
    const [user, setUser] = useState<FetchUserContent[]>();

    const getUserData = async () => {
        const response = await fetchUser(id);

        if (!response.access) return redirect("/login");

        setUser(response.body?.content);
    };
    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <div>
                {user ? user?.map((e) => (
                    <div
                        key={e.id}
                        className="flex flex-col items-center mt-10"
                    >
                        <Image
                            src={userProfile}
                            alt="profile"
                            className="w-30"
                        />
                        <div>
                            <p>{e.type}</p>
                            <p>First name : {e.firstname}</p>
                            <p>Country : {e.country}</p>
                            <p>Industry : {e.industry}</p>
                            <p>Email : {e.email}</p>
                            <p>Phone : {e.phone}</p>
                        </div>
                    </div>
                )): <LoadingLogo/>}
            </div>
        </>
    );
};

export default DisplayUser;
