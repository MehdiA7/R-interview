"use server";

import { checkJwt } from "@/app/middleware";

const Api: string = process.env.API_URL || "NO API";

export const fetchAllFirstname = async () => {
    const token = await checkJwt();

    if (!token) return { access: false };

    const response = await fetch(`${Api}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    });

    if (response.status === 403)
        return { access: false, success: false, message: "Access denied" };

    if (!response.ok)
        return {
            access: true,
            success: false,
            message: "We have a problem...",
        };

    const data = await response.json();

    return { access: true, body: data };
};

export const fetchUser = async ( userId: number ) => {
    const token = await checkJwt();

    if (!token) return { access: false };

    const response = await fetch(`${Api}/users/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    });

    if (response.status === 403)
        return { access: false, success: false, message: "Access denied" };

    if (!response.ok)
        return {
            access: true,
            success: false,
            message: "We have a problem...",
        };

    const data = await response.json();

    return { access: true, body: data };

}
