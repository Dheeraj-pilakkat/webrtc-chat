"use client";
import img from "../../../../public/signup.png";
import Image from "next/image";
import INPUT from "@/app/components/ui/input";
import { useState } from "react";
import SiginButton from "@/app/components/ui/siginbutton";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex justify-between bg-dark p-2">
      <div className=" h-full w-full ">
        <Image src={img} alt="signup" className="w-full h-full rounded-lg" />
      </div>
      <div className="w-full p-6">
        <div className="flex justify-between gap-6">
              <Link href="/Home">
          <div className="flex items-center gap-2">
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              ConnectApp
            </h2>
          </div>
              </Link>
          <div className="text-md">
            <span className="text-gray-400 dark:text-gray-200 ">
              Already have an account?
            </span>
            <a className="font-bold text-primary px-1" href="/sigin">
              Sign In
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-12 mt-15">
          <h1 className="text-4xl font-bold text-white">Create Your Account</h1>
          <h1 className="text-xl text-gray-600">
            Get started by creating a new account.
          </h1>
        </div>
        <form noValidate className="px-12 mb-3">
          <INPUT
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prev) => ({ ...prev, username: "" }));
            }}
            type="text"
            placeholder=""
            label="Username"
            className="mb-10 text-white "
            helperText={errors.username}
            error={Boolean(errors.username)}
          />
          <div className="flex gap-4">
            <INPUT
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setErrors((prev) => ({ ...prev, firstName: "" }));
              }}
              type="text"
              placeholder=""
              label="First Name"
              className="mb-10 text-white "
              helperText={errors.firstName}
              error={Boolean(errors.firstName)}
            />
            <INPUT
              value={middleName}
              onChange={(e) => {
                setMiddleName(e.target.value);
                setErrors((prev) => ({ ...prev, middleName: "" }));
              }}
              type="text"
              placeholder=""
              label="Middle Name"
              className="mb-10 text-white "
              helperText={errors.middleName}
              error={Boolean(errors.middleName)}
            />
            <INPUT
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setErrors((prev) => ({ ...prev, lastName: "" }));
              }}
              type="text"
              placeholder=""
              label="Last Name"
              className="mb-10 text-white "
              helperText={errors.lastName}
              error={Boolean(errors.lastName)}
            />
          </div>
          <INPUT
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            type="email"
            placeholder=""
            label="Email"
            className="mb-10 text-white"
            helperText={errors.email}
            error={Boolean(errors.email)}
          />
          <div className="flex justify-evenly gap-4">
            <INPUT
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              type="password"
              placeholder=""
              label="Password"
              className="mb-10 text-white"
              helperText={errors.password}
              error={Boolean(errors.password)}
            />
            <INPUT
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
              }}
              type="password"
              placeholder=""
              label="Confirm Password"
              className="mb-10 text-white"
              helperText={errors.confirmPassword}
              error={Boolean(errors.confirmPassword)}
            />
          </div>

          {serverError && <p className="text-red-400 mb-2">{serverError}</p>}
          {successMessage && (
            <p className="text-green-400 mb-2">{successMessage}</p>
          )}

          <div className="mt-4">
            <button
              type="submit"
              className={`px-4 py-3 w-full rounded bg-primary text-white ${
                loading ? "opacity-60 cursor-wait" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-2 items-center text-gray-200">
          <div className="border-b border-gray-400 w-1/3"></div>
          <span>or sign up with</span>
          <div className="border-b border-gray-400 w-1/3"></div>
        </div>
        <div className="flex justify-evenly items-center text-gray-200 mt-5">
          {/* <button className="px-10 cursor-pointer py-2 flex gap-3 border border-red-500 rounded" onClick={()=>signIn("google")}>
                        <Image src={google} alt="Google" width={20} height={20} className="inline-block mr-2 mb-1"/>
                        Google</button> */}
          <SiginButton
            img="/b.png"
            provider="google"
            providerId="Google"
            callbackUrl="/"
            className="border border-primary hover:bg-primary hover:text-white hover:scale-125 transition-all hover:shadow-lg shadow-black"
          />
          <button
            className="px-10 cursor-pointer py-2 gap-3 border border-primary hover:bg-primary hover:text-white hover:scale-125 transition-all hover:shadow-lg shadow-black rounded"
            onClick={() => signOut()}
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="inline-block mr-2 mb-1"
            />
            GitHub
          </button>
          <SiginButton
            img="/github.png"
            provider="github"
            providerId="GitHub"
            callbackUrl="/"
            className="border border-primary hover:bg-primary hover:text-white hover:scale-125 transition-all hover:shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
}
