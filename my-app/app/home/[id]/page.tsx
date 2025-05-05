import DisplayUser from "@/components/DisplayUser";
import LogoHeader from "@/components/LogoHeader";
import React, { FC } from "react";

type DisplayUserPageProps = {
    params: {
        id: string;
    };
};

const DisplayUserPage: FC<DisplayUserPageProps> = async ({ params }) => {

    return (
        <div>
            <LogoHeader/>
            <DisplayUser id={parseInt(params.id)} />
        </div>
    );
};

export default DisplayUserPage;
