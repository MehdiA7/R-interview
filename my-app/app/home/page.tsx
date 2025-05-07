import FirstnameUserList from "@/components/FirstnameUserList";
import Image from "next/image";
import logo from "@/public/logo.png";

const HomePage = () => {
    return (
        <>
            <div className="flex justify-center mb-20">
                <Image src={logo} alt="logo" className="w-20" />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-semibold text-center mb-10">
                    All user
                </h1>
                <FirstnameUserList />
            </div>
        </>
    );
};

export default HomePage;
