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
    const knownPaths = ["/", "/about", "/api/send-to-email"];

    if (!knownPaths.includes(pathname)) return <NotFound />;
    const menuItems: any = {
        about: "О-Нас",
        services: "Услуги",
        reviews: "Отзывы",
        contacts: "Контакты",
    };

    return (
        <>
            <Header menuItems={menuItems} />
            <span></span>
            {children}
            <Footer menuItems={menuItems} />
        </>
    );
}
