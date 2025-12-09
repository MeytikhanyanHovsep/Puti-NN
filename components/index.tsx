"use client";
import Header from "./header";
import Footer from "./footer";

type Props = {
    children: React.ReactNode;
};

export default function Components({ children }: Props) {
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
