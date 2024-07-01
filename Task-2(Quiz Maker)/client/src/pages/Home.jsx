import { Link } from "react-router-dom";

const Home = () => {
    return (
      <>
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="mt-[10%] text-3xl md:text-5xl text-center">
            Online Quiz Maker
          </h1>
                <Link
                    to="/createquiz"
            className={`w-[250px] md:w-[450px] h-[50px] md:h-[100px] mt-14 flex items-center justify-center active:bg-purple-900 text-purple-700 rounded-md border-2 border-purple-700 hover:bg-purple-700 hover:text-white transition-all`}
          >
            <p className="text-xl sm:text-2xl">Create A Quiz</p>
          </Link>
          <div className="w-[250px] md:w-[450px] h-[50px] flex flex-row items-center gap-[4%] mt-5">
            <input
              type="text"
              //   value={username}
              placeholder="Enter Quiz ID"
              className="w-[68%] p-2 text-xl border border-[3px] rounded-md border-purple-700 focus:border-[3px] focus:outline-none"
              //   onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div
              className={`w-[28%] h-[50px] flex items-center justify-center active:bg-purple-900 text-purple-700 rounded-md border-2 border-purple-700 hover:bg-purple-700 hover:text-white transition-all`}
            >
              <p className="text-xl sm:text-2xl">Join</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;