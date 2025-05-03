import { NewUser } from "@/lib/schema/newUser";

export async function createANewUser(body: NewUser) {
    const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify(body)
    });

    console.log(response)
}
