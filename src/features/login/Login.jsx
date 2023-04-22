import AuthRight from "../../components/AuthRight.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The G8 Team
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* Phone number input */}
                      <div className="relative z-0 w-full group">
                        <label
                          htmlFor="phoneNumber"
                          className="uppercase  text-[11px]  text-gray-900 bg-white relative px-1  top-2 left-3 w-auto group-focus-within:text-rose-400"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="h-9 text-10 bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                          required={true}
                          placeholder="+251953890542"
                        />
                      </div>

                      {/* Password input */}
                      <div className="relative z-0 w-full group">
                        <label
                          htmlFor="phoneNumber"
                          className="uppercase  text-[11px]  text-gray-900 bg-white relative px-1  top-2 left-3 w-auto group-focus-within:text-rose-400"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="h-9 text-10 bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-0"
                          required={true}
                          placeholder="abcd@1234!"
                        />
                      </div>

                      {/* Submit button */}
                      <button className="mb-12 mt-5 pb-1 pt-1 text-center w-full">
                        <p className="mb-3 bg-black inline-block  rounded w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                          Log in
                        </p>

                        {/* Forgot password link */}
                        <a href="#!">Forgot password?</a>
                      </button>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          onClick={() => {
                            navigate("/signup");
                          }}
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <AuthRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
