"use client";

import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-2 sm:px-2.5 md:px-3">
        <div className="md:flex justify-between md:h-screen items-center">
          <div className="md:flex-1">
            <Image
              src="https://i.ibb.co/0GWgxFp/Frame.png"
              width={400}
              height={500}
              alt="image"
              className="hidden md:block"
              priority
            />
          </div>
          <div className="card-body flex-1 border mt-[40%] md:mt-0">
            <h1 className="text-3xl font-bold text-center mb-10">Login</h1>

            <form onSubmit={handleLogin} className="w-full md:w-4/5 mx-auto">
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>
            <div>
              <p className="text-center mt-3 mb-5">Or Sign In with</p>
              <div className="flex items-center justify-center gap-5">
                <button className="bg-slate-100 p-2 rounded-full">
                  <FaFacebookF className="text-xl text-blue-700" />
                </button>
                <button className="bg-slate-100 p-2 rounded-full">
                  <FaLinkedinIn className="text-xl text-blue-500" />
                </button>
                <button className="bg-slate-100 p-2 rounded-full">
                  <FcGoogle className="text-xl" />
                </button>
                <button className="bg-slate-100 p-2 rounded-full">
                  <FaGithub className="text-xl" />
                </button>
              </div>
            </div>
            <div className="my-4 text-center">
              {`Don't`} have an account?{" "}
              <Link className="text-primary font-bold" href="/signup">
                Sign Up
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
