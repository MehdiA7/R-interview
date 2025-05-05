"use client";
import { FetchUserContent } from "@/lib/type";
import { fetchUser } from "@/serverAction/fetchUserData";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";

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
	console.log(user)
	useEffect(() => {
		getUserData();
	}, []);

    return (
        <>
            <div>
                {/* {user?.map((e) => e.)} */}
            </div>
        </>
    )
};

export default DisplayUser;
