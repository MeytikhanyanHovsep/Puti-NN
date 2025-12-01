import React from "react";

type Props = {
    children: React.ReactNode;
    text?: string;
};

export default function Title({ children, text }: Props) {
    return (
        <>
            <div>
                <h3 className="text-[33px] max-md:text-[25px] font-bold leading-tight">
                    {children}
                </h3>
                {text && <p className=" gray-color mt-[5px]">{text}</p>}
            </div>
        </>
    );
}
