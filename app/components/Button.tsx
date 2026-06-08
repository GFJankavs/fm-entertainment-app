import type { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...rest
}) => (
    <button
        className="w-full text-preset-4 rounded-md p-4 bg-white text-blue-900 active:text-white active:bg-red cursor-pointer"
        {...rest}
    >
        {children}
    </button>
);

export default Button;
