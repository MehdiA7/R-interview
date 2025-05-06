import DisplayUser from "@/components/DisplayUser";
import LogoHeader from "@/components/LogoHeader";
import LogoHeaderSecure from "@/components/LogoHeaderSecure";
import React, { FC } from "react";

type DisplayUserPageProps = {
    params: {
        id: string;
    };
};

const DisplayUserPage: FC<DisplayUserPageProps> = async ({ params }) => {

    return (
        <div>
            <LogoHeaderSecure/>
            <DisplayUser id={parseInt(params.id)} />
        </div>
    );
};

export default DisplayUserPage;
