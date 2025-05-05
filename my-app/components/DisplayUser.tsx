"use client";
import { fetchUser } from "@/serverAction/fetchUserData";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";

type DisplayUserProps = {
    id: number;
};

const DisplayUser: FC<DisplayUserProps> = ({ id }) => {
	const [user, setUser] = useState();

    const getUserData = async () => {
        const response = await fetchUser(id);

        if (!response.access) return redirect("/login");

        setUser(response.body?.content);
    };
	console.log(user)
	useEffect(() => {
		getUserData();
	}, []);

    return <div>{id}</div>;
};

export default DisplayUser;
