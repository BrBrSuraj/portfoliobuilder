import myImage from "../assets/images/milestone.jpg";
const Home = () => {
  return (
    <>
      <div className="container  min-h-screen flex flex-col">
        <div className="main w-full  md:w-[70%]  m-auto">
          <header className="flex gap-2 items-center justify-start py-5 px-7">
            <h1 className="bg-appBackground rounded-full p-6 text-white text-3xl">PB</h1>
            <p className="text-2xl font-extrabold tracking-widest text-appBackground">
              Portfolio
            </p>
          </header>
          <section className="content px-7 py-4">
            <div className="title">
              <div className="flex gap-2 items-center font-bold tracking-widest">
                <h1 className="text-md md:text-3xl ">Portfolio</h1>
                <h1 className="text-lg md:text-4xl text-appBackground">Builder</h1>
                <h1 className="text-md md:text-3xl">Application</h1>
              </div>

              <div className="text-justify flex justify-center  gap-10">
                <p className="about tracking-wider text-xl mt-5 leading-9 subpixel-antialiased font-mono">
                <span className="text-lg font-bold text-appBackground">Supercharge</span> your professional profile with our Portfolio Builder. Create a striking portfolio in minutes, complete with a shareable link for maximum impact. Plus, effortlessly generate diverse resume formats from your existing profile data. Elevate your online presence and make a lasting impression with our intuitive and efficient Portfolio Builder. Level up your career journey from here!
                </p>
                <img alt="img" src={myImage} className="w-60 h-40 opacity-10 hidden lg:block"/>
              </div>
            </div>

            <section className="flex gap-3 text-white mt-5 mb-5">
              <button
                type="button"
                className="btn shadow-lg hover:bg-emerald-700 hover:transition-all duration-100 delay-100 bg-appBackground rounded-md px-5 py-2"
              >
                {" "}
                Login{" "}
              </button>
              <button
                type="button"
                className="btn shadow-lg hover:bg-emerald-700 hover:transition-all duration-100 delay-100 bg-appBackground rounded-md px-5 py-2"
              >
                {" "}
                Sign-Up{" "}
              </button>
            </section>
          </section>
        </div>

        {/* footer */}
        <div className="footer mt-auto w-full bg-appBackground flex flex-col justify-items-center items-center">
          <span className="text-lg font-extrabold text-white text-bolder tracking-widest border-b-2 w-full text-center pb-2 pt-2 md:text-4xl md:border-b-0 font-mono">
            Portfolio Builder
          </span>
          <div className="mt-2 text-center pb-2">
            <ul className="flex flex-col md:flex-row md:gap-1 p-2 text-white">
              <li className="hover:bg-emerald-300 border-r-1 p-1 px-2 hover:shadow-lg hover:transition-all duration-800 delay-100 rounded-md">
                <a href="#">Email</a>
              </li>
              <li className="hover:bg-emerald-300 border-r-1 p-1 px-2 hover:shadow-lg hover:transition-all duration-800 delay-100 hover:rounded-md">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:bg-emerald-300 border-r-1 p-1 px-2 hover:shadow-lg hover:transition-all duration-800 delay-100 rounded-md">
                <a href="#">Geo-Location</a>
              </li>
              <li className="hover:bg-emerald-300 border-r-1 p-1 px-2 hover:shadow-lg hover:transition-all duration-800 delay-100 rounded-md">
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
