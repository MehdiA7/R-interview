import Image from "next/image";
import Logo from "@/public/logo.png";
import { FeedBackCarousel } from "@/components/FeedBackCarousel";

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
            <div className="flex justify-center ">
                <FeedBackCarousel />
            </div>
        </main>
    );
}
