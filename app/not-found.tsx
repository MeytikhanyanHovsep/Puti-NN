import Title from "@/components/common/title";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
    return (
        <section className="container w-screen h-full grid place-items-center ">
            <div className="flex items-center gap-[5px] pt-[90px] max-sm:pt-[50px] flex-col">
                <Title as="h4">404 – Страница не найдена</Title>
                <p>
                    К сожалению, мы не смогли найти страницу, которую вы ищете.
                </p>
                <Link href="/" className="text-[20px] font-bold primary">
                    Перейти на Главную
                </Link>
            </div>
        </section>
    );
}
