"use client";
import Header from "./header";
import Footer from "./footer";

type Props = {
    children: React.ReactNode;
};

import { usePathname } from "next/navigation";
import NotFound from "@/app/not-found";

export default function Components({ children }: Props) {
    const pathname = usePathname();

    const menuItems: any = {
        about: "О-Нас",
        services: "Услуги",
        reviews: "Отзывы",
        contacts: "Контакты",
    };

    if (pathname != "/") return <NotFound />;

    return (
        <>
            <Header menuItems={menuItems} />
            <span></span>
            {children}
            <Footer menuItems={menuItems} />
        </>
    );
}
