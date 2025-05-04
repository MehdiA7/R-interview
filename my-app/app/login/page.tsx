import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-30">
			<h1 className="text-[41px] font-semibold mb-15">Log in</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
