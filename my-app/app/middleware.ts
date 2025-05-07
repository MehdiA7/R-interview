import { cookies } from "next/headers";

export const checkJwt = async () => {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("Authorization");
    return cookie;
}
