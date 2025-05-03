import { NewUser } from "@/lib/schema/newUser";

export async function createANewUser(body: NewUser) {
    const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    
    return response;
}
