import classNames from "classnames";
import { InputHTMLAttributes } from "react";

const InputForm = ({
    error,
    ...rest
}: InputHTMLAttributes<HTMLInputElement> & { error?: string }) => (
    <div
        className={classNames(
            "px-4 pb-4 border-b flex items-center justify-between w-full",
            {
                "border-b-red": !!error,
                "border-b-blue-500 focus-within:border-b-white": !error,
            },
        )}
    >
        <input
            className="outline-none w-full caret-red text-white placeholder:opacity-50 text-preset-4"
            {...rest}
        />
        {error && <span className="text-red text-preset-5">{error}</span>}
    </div>
);

export default InputForm;
