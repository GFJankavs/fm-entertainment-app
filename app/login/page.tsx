import Link from "next/link";
import Button from "../components/Button";
import LogoIcon from "../components/icons/LogoIcon";
import InputForm from "../components/InputForm";

export default function Login() {
    return (
        <main className="w-full h-dvh flex flex-col items-center gap-700 pt-12 px-6">
            <LogoIcon />

            <div className="grid text-white py-[30px] w-full max-w-[400px] px-6 bg-blue-900 rounded-[10px]">
                <h1 className="text-preset-1">Login</h1>
                <form>
                    <div className="py-500 grid gap-300">
                        <InputForm />
                        <InputForm />
                    </div>
                    <Button>Login to your account</Button>
                </form>
                <div className="pt-300 flex items-center justify-center gap-2">
                    <span>Don&apos;t have an account?</span>
                    <Link href="/sign-up" className="text-red">
                        Sign Up
                    </Link>
                </div>
            </div>
        </main>
    );
}
