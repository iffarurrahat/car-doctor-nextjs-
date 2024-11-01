"use client";

import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-2 sm:px-2.5 md:px-3">
        <div className="md:flex justify-between md:h-screen items-center">
          <div className="md:flex-1">
            <Image
              src="https://i.ibb.co/0GWgxFp/Frame.png"
              alt="image"
              width={400}
              height={500}
              className="hidden md:block"
              priority
            />
          </div>
          <div className="card-body flex-1 border mt-[35%] md:mt-0">
            <h1 className="text-3xl font-bold text-center mb-10">Sign Up</h1>
            <form onSubmit={handleSignUp} className="w-full md:w-4/5 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-3">
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
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded"
                  type="submit"
                  value="Signup"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-bold" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
