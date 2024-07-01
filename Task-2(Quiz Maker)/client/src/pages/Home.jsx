import Options from "../components/Options";

const Home = () => {
    return (
        <>
            <div className="w-fit h-fit px-4 py-2 rounded-lg bg-purple-700 text-white mt-10 absolute ml-10">
                Quiz ID: 12345
            </div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-purple-500 flex items-center justify-center">
                    <div className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-purple-700 flex flex-col items-center justify-center hover:bg-purple-800 hover:cursor-pointer transition-all">
                        <h1 className="text-3xl sm:text-4xl">Start Quiz</h1>
                        <p className="text-xl sm:text-2xl mt-4">No. of Questions: 5</p>
                        {/* <p className="text-3xl sm:text-4xl">Start Quiz</p> */}
                    </div>
                </div>
            </div>
            <Options option="Hello"  />
        </>
    )
}

export default Home;