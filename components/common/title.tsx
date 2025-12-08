import React from "react";

type Props = {
    children: React.ReactNode;
    text?: string;
    as?: "h1" | "h2" | "h3" | "h4"; // возможность управлять уровнем заголовка
};

export default function Title({ children, text, as = "h3" }: Props) {
    const Tag = as;

    return (
        <div>
            <Tag
                className="text-[33px] max-md:text-[25px] font-bold leading-tight"
                itemProp="headline"
            >
                {children}
            </Tag>

            {text && <p className="gray-color mt-[5px]">{text}</p>}
        </div>
    );
}
