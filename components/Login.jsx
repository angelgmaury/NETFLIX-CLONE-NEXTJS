"use client";
import Input from "@/components/Input";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    reset();
    router.push("/selectUser");
  };

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="login bg-fixed">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="netflix-logo"
            width={120}
            height={48}
            priority={true}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-12 py-8 self-center mt-2 md:w-2/5 md:max-w-md rounded-lg w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <Input
                type="text"
                label="Username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username es requerido",
                  },
                  minLength: {
                    value: 3,
                    message: "the username must have at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "the username must have at most 20 characters",
                  },
                })}
                error={errors.username}
              />

              <Input
                type="email"
                label="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "the email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "the email is invalid",
                  },
                })}
                error={errors.email}
              />

              <Input
                type="password"
                label="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "the password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "the password must have at least 8 characters",
                  },
                })}
                error={errors.password}
              />

              <button
                type="submit"
                className="bg-red-600 rounded-md text-white w-full text-center py-3 mt-10 hover:bg-red-700 transition"
              >
                Login
              </button>
            </form>
            <p className="text-neutral-400 mt-12 w-full">
              First time using Netflix?
              <span
                className="ml-1 mr-1 cursor-pointer text-white transition duration-300  font-semibold hover:underline"
                onClick={toggleVariant}
              >
                Create an accout
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
