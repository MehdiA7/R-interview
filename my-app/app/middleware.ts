import { cookies } from "next/headers";

export const checkJwt = async () => {
    const cookieStore = await cookies();
    let cookie = cookieStore.get("Authorization");
    console.log(cookie);

    return cookie;
}
