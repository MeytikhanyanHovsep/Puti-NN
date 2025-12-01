"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    menuItems: any;
};

export default function Header({ menuItems }: Props) {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const [servicesToggle, setServicesToggle] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<boolean>(true);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(!position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header
            className={
                " w-full absolute max-lg:fixed top-0 bg-transparent transition-colors duration-500 z-100 shadow-[#efefef] " +
                (scrollPosition ? "" : "max-lg:bg-white max-lg:shadow-md") +
                (menuToggle ? " max-lg:bg-white" : "")
            }
        >
            <nav className="container py-[30px] max-sm:py-[20px] flex max-lg:flex-col items-center justify-between">
                <div className="flex max-lg:w-full max-lg:justify-between">
                    <h1>
                        <Link
                            href="/"
                            className="primary text-[25px] max-sm:text-[22px] font-bold"
                        >
                            Пути-НН
                        </Link>
                    </h1>
                    <button
                        onClick={() => {
                            setMenuToggle(!menuToggle);
                            setServicesToggle(false);
                        }}
                        className="hidden max-lg:block cursor-pointer"
                    >
                        <Menu width={30} height={30} />
                    </button>
                </div>
                <motion.ul
                    className={
                        "flex max-lg:flex-col  max-lg:w-full max-lg:items-start  items-center gap-[30px] max-lg:overflow-hidden transition-opacity duration-200 max-lg:order-3 lg:pt-0! lg:h-auto! lg:opacity-100!"
                    }
                    initial={{ height: 0, opacity: 0, paddingTop: 0 }}
                    animate={
                        menuToggle
                            ? { height: "auto", opacity: 1, paddingTop: 30 }
                            : { height: 0, opacity: 0, paddingTop: 0 }
                    }
                    transition={{
                        duration: 0.3,
                    }}
                >
                    {Object.keys(menuItems).map((key, i) => (
                        <li key={i} className="relative group z-50">
                            {key === "services" ? (
                                <div className="relative">
                                    <button
                                        className="font-md cursor-pointer hover:text-[#30AFA7] text-primary transition-colors flex items-center gap-1 duration-200"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setServicesToggle(!servicesToggle);
                                        }}
                                    >
                                        {menuItems[key]}
                                        <ChevronDown
                                            className={`transition-transform duration-200 ${
                                                servicesToggle
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {/* Анимация выпадающего списка */}
                                    <AnimatePresence>
                                        {servicesToggle && (
                                            <motion.ul
                                                // Начальное состояние (скрыто, сдвинуто вверх)
                                                initial={{
                                                    opacity: 0,
                                                    y: -10,
                                                    scale: 0.95,
                                                }}
                                                // Конечное состояние (видимо, на месте)
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                }}
                                                // Состояние при закрытии (исчезает, сдвигается вверх)
                                                exit={{
                                                    opacity: 0,
                                                    y: -10,
                                                    scale: 0.95,
                                                }}
                                                // Настройка плавности
                                                transition={{
                                                    duration: 0.2,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute top-[150%] max-lg:top-[-150%] max-lg:left-[250%] -translate-x-1/2 left-1/2 bg-white shadow-xl rounded-md w-48 overflow-hidden border border-gray-100 origin-top"
                                            >
                                                {Array.from({ length: 5 }).map(
                                                    (_, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="hover:bg-gray-50 border-b last:border-0 border-gray-100"
                                                        >
                                                            <a
                                                                href={`#service-${
                                                                    idx + 1
                                                                }`}
                                                                className="block px-4 py-3 text-sm text-gray-700 hover:text-[#30AFA7] transition-colors"
                                                                onClick={() => {
                                                                    setServicesToggle(
                                                                        false
                                                                    );
                                                                    setMenuToggle(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                Услуга {idx + 1}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <a
                                    onClick={() => setMenuToggle(false)}
                                    href={"#" + key}
                                    className="font-md hover:text-[#30AFA7] text-primary transition-colors duration-200 flex items-center"
                                >
                                    {menuItems[key]}
                                </a>
                            )}
                        </li>
                    ))}
                    <li className="hidden max-lg:block font-[25px]">
                        <a
                            href="tel:+79107982890"
                            className=" primary flex items-center gap-[5px] font-bold text-[18px]"
                        >
                            <PhoneCall />
                            <p>+7 (910) 798-28-90</p>
                        </a>
                    </li>
                </motion.ul>
                <a
                    href="tel:+79107982890"
                    className=" primary flex items-center max-lg:hidden gap-[5px] font-bold text-[20px]"
                >
                    <PhoneCall />
                    <p className=" text-[22px]">+7 (910) 798-28-90</p>
                </a>
            </nav>
        </header>
    );
}
