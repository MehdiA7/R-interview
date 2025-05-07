import DisplayUser from "@/components/DisplayUser";
import LogoHeader from "@/components/LogoHeader";
import React from "react";

type DisplayUserPageProps = {
    params: Promise<{
        id: string;
    }>;
};

async function DisplayUserPage({ params }: DisplayUserPageProps) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);

    return (
        <div>
            <LogoHeader />
            <DisplayUser id={id} />
        </div>
    );
}

export default DisplayUserPage;
