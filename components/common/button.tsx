import React from "react";

type Props = {
    children: React.ReactNode;
    href: string;
};

export default function Button({ children, href }: Props) {
    return (
        <a
            href={href}
            className="px-[50px] max-md:px-[30px] max-sm:text-[15px] max-sm:border-2 max-md:py-[10px] shadow-lg text-center text-white tracking-[0.8px] capitalize primary-bg py-[15px] rounded-[7px] duration-200 transition-colors common-button border-3 border-[#30AFA7] hover:text-[#30AFA7]! font-bold"
        >
            {children}
        </a>
    );
}
