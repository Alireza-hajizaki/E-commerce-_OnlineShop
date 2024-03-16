import { CiSearch } from "react-icons/ci"

const SignInPage = () => {
  return (
    <div id="sign-in" className="max-w-md">
          <h2 className="font-normal tracking-tight text-2xl font-serif mb-2">
            I already have an account
          </h2>
          <span className="max-w-sm mb-5 font-sans font-light text-gray-500">
            Sign in with your email and password
          </span>
          <div className="mt-12">
            <form className="flex flex-col">
              <div className="flex items-center justify-between border-b border-gray-400">
                <input
                  type="text"
                  className="border-none md:w-80 placeholder:font-thin placeholder:tracking-tight
                  focus:ring-0"
                  placeholder="Email"
                />
                <CiSearch
                  className="text-gray-500 mt-1 md:text-xl
                  md:mt-3"
                />
              </div>
              <div className="flex items-center justify-between border-b border-gray-400">
                <input
                  type="text"
                  className="border-none md:w-80 placeholder:font-thin placeholder:tracking-tight
                  focus:ring-0"
                  placeholder="Password"
                />
                <CiSearch
                  className="text-gray-500 mt-1 md:text-xl
                  md:mt-3"
                />
              </div>
              <div className="flex gap-4 my-8">
                <button className="bg-black md:w-auto rounded-sm flex items-center justify-center p-3 text-white shadow-sm px-5 hover:bg-opacity-90 hover:shadow-lg transition hover:-translate-y-0.5 duration-150 md:px-9">Sign in</button>
                <button className="bg-sky-500 md:w-auto rounded-sm flex items-center justify-center p-3 text-white shadow-sm px-9 hover:bg-opacity-90 hover:shadow-lg transition hover:-translate-y-0.5 duration-150 md:px-9">Sign in with google</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default SignInPage
