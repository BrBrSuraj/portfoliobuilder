import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Login = () => {
  return (
    <div className="card-container h-screen flex flex-col justify-center items-center">
      <div className="border-t-8 border-appBackground px-10 py-10 rounded-t-md shadow-xl ">
        <div className="mt-2 mb-5 flex flex-col justify-center items-center">
          <Logo />
          <h1 className="text-center text-2xl font-extrabold pt-1 mt-5">Login</h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3 justify-start">
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input-form px-2 py-2 border-2 rounded-md outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-1 rounded-md">
            <label className="" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="inputForm px-2 py-2 border-2 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <div className="mt-2">
              <button className="bg-appBackground px-4 py-1 rounded-md text-lg text-white w-full">Login</button>
            </div>
            <div className="mt-3 mb-4">
              <span className="">not register yet?</span>
              <span className="text-blue-500 font-bold px-1 text-sm">
                <Link to='/register'>click here to register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
