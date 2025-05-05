import FirstnameUserList from "@/components/FirstnameUserList";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <h1 className="text-4xl font-semibold text-center mb-10">All user</h1>
            <FirstnameUserList />
        </div>
    );
};

export default HomePage;
