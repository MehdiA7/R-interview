
import DisplayUser from "@/components/DisplayUser";
import React, { FC } from "react";

type DisplayUserPageProps = {
    params: {
        id: string
    }
}


const DisplayUserPage: FC<DisplayUserPageProps> = ({ params }) => {
    return (
        <div>
            <p>RESULT : {params.id}</p>
            <DisplayUser id={parseInt(params.id)}/>
        </div>
    );
};

export default DisplayUserPage;
