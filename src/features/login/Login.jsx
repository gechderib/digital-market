import { useState } from "react";
import AuthRight from "../../components/AuthRight.jsx";
import { json, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "./loginSlice.jsx";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // login info
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const loginInfo = {
    phoneNumber,
    password,
  };
  const getPhoneNumber = (e) => setPhoneNumber(e.target.value);
  const getPassword = (e) => setPassword(e.target.value);
  //idle | loading | net | failed
  // request status
  const [loginStatus, setLoginStatus] = useState("idle");
  // can save
  const canSave = [phoneNumber, password].every(Boolean);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginStatus("idle");

    if (canSave) {
      try {
        setLoginStatus("pending");
        const response = await dispatch(loginUser(loginInfo)).unwrap();
        console.log(response);
        if (response == "ERR_BAD_REQUEST") {
          setLoginStatus("bad_err");
        }
        if (response == "ERR_NETWORK") {
          setLoginStatus("net_err");
        }
        if(response.accessToken){
          setPassword("")
          setPhoneNumber("")
          setLoginStatus("idle")
          localStorage.setItem("user",JSON.stringify(response)) 
          navigate("/")
        }
      } catch (err) {
        setLoginStatus("failed");
      }
    }
  };
  console.log(loginStatus);
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

                    <form onSubmit={handleSubmit}>
                      {loginStatus == "net_err" ? (
                        <p className="text-red-600 mb-4 italic animate-bounce">
                          Pleace check your connection
                        </p>
                      ) : loginStatus == "bad_err" ? (
                        <p className="text-red-600 mb-4 italic animate-bounce">
                          wrong phone number / password
                        </p>
                      ) : loginStatus == "faild" ? (
                        <p className="mb-4 animate-bounce">
                          error happen please try again
                        </p>
                      ) : (
                        <p className="mb-4	animate-bounce animate-pulse">
                          Please login to your account
                        </p>
                      )}
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
                          onChange={getPhoneNumber}
                          value={phoneNumber}
                          className="h-9 text-10 bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                          required={true}
                          placeholder="+251953890542"
                        />
                      </div>

                      {/* Password input */}
                      <div className="relative z-0 w-full group">
                        <label
                          htmlFor="password"
                          className="uppercase  text-[11px]  text-gray-900 bg-white relative px-1  top-2 left-3 w-auto group-focus-within:text-rose-400"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          onChange={getPassword}
                          value={password}
                          className="h-9 text-10 bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-0"
                          required={true}
                          placeholder="abcd@1234!"
                        />
                      </div>

                      {/* Submit button */}
                      <button
                        className="mb-6 mt-5 py-2 flex justify-center hover:bg-gray-950 rounded-lg text-center bg-black  w-full"
                      >
                        {loginStatus == "pending" ? (
                          <div>
                            <svg
                              aria-hidden="true"
                              className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : null}
                        <p className="font-bold uppercase  text-white">
                          Log in
                        </p>

                        {/* Forgot password link */}
                      </button>
                      <div className="flex justify-center mb-12">
                        <a className="text-center" href="#!">
                          Forgot password?
                        </a>
                      </div>

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
