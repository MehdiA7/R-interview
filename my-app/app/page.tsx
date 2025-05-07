import Image from "next/image";
import Logo from "@/public/logo.png";
import { FeedBackCarousel } from "@/components/FeedBackCarousel";
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-[url(../public/bgH.png)] w-full h-full">
            <header className="flex w-20 ml-5">
                <Image src={Logo} alt="logo" />
            </header>
            <div className="flex flex-col items-center justify-center text-center mt-20 mb-15 space-y-10">
                <h1 className="text-4xl text-white font-semibold w-96">
                    Manage your Money Anywhere
                </h1>
                <p className="text-gray-200 w-96">
                    View all the analytics and grow your business from anywhere!
                </p>
            </div>
            <div className="flex justify-center w-full mb-10">
                <FeedBackCarousel />
            </div>
            <div className="flex justify-center">
                <Link href={"/register"}>
                    <button className="bg-[#fd5b13] text-white text-[15px] border-1 border-[#fd5b13] rounded-md w-52 h-9 hover:bg-white hover:text-black transition-all duration-300">
                        Register
                    </button>
                </Link>
            </div>
            <div className="h-52"></div>
        </main>
    );
}
