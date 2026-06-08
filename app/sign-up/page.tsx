"use client";

import Link from "next/link";
import Button from "../components/Button";
import LogoIcon from "../components/icons/LogoIcon";
import InputForm from "../components/InputForm";
import { useForm } from "react-hook-form";
import { SignUpForm } from "../types";
import { useMemo } from "react";

export default function SignUp() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({
        defaultValues: {
            email: "",
            password: "",
            passwordRepeat: "",
        },
    });

    const onFormSubmit = (data: SignUpForm) => {
        console.log("Submitted data =>", data);
    };

    const formErrors = useMemo(() => {
        return {
            email: errors.email,
            password: errors.password,
            passwordRepeat: errors.passwordRepeat,
        };
    }, [errors.email, errors.password, errors.passwordRepeat]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const { password } = watch();

    console.log("Form errors =>", formErrors);

    return (
        <main className="w-full h-dvh flex flex-col items-center gap-700 pt-12 px-6">
            <LogoIcon />

            <div className="grid text-white py-[30px] w-full max-w-[400px] px-6 bg-blue-900 rounded-[10px]">
                <h1 className="text-preset-1">Sign Up</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="py-500 grid gap-300">
                        <InputForm
                            placeholder="Email address"
                            type="email"
                            error={formErrors.email?.message}
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message:
                                        "Email does not match required pattern",
                                },
                            })}
                        />
                        <InputForm
                            placeholder="Password"
                            type="password"
                            error={formErrors.password?.message}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            })}
                        />
                        <InputForm
                            placeholder="Repeat Password"
                            type="password"
                            error={formErrors.passwordRepeat?.message}
                            {...register("passwordRepeat", {
                                required: {
                                    value: true,
                                    message: "Password repeat is required",
                                },
                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match",
                            })}
                        />
                    </div>
                    <Button>Create an account</Button>
                </form>
                <div className="pt-300 flex items-center justify-center gap-2">
                    <span>Already have an account?</span>
                    <Link href="/login" className="text-red">
                        Login
                    </Link>
                </div>
            </div>
        </main>
    );
}
