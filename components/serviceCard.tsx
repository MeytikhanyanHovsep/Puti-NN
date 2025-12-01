"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
    title: string;
    name: string;
    description: string;
    keys: string[];
    icon: React.ReactNode;
}

export default function ServiceCard({
    service,
    ind,
}: {
    service: Service;
    ind: number;
}) {
    const [showKeys, setShowKeys] = useState(false);

    return (
        <div
            id={`service-${ind + 1}`}
            className={
                "shadow-lg rounded-[10px] border-[3px]  flex flex-col items-center gap-[5px] p-[20px] max-sm:gap-0 pt-[25px] max-h-max max-md:px-[10px] max-md:pt-[20px] " +
                (service.title.includes("Online") && ind == 0
                    ? "border-[#30afa65a]"
                    : "border-[#fef3de]")
            }
        >
            <span
                className={
                    service.title.includes("Online") && ind == 0
                        ? "text-[#30afa6d5]"
                        : " gold"
                }
            >
                {service.icon}
            </span>
            <h2 className="text-[18px] max-md:text-[16px] text-center font-bold my-[10px]">
                {service.title}
            </h2>

            <p className="gray-color max-md:text-[14px]">
                {service.description}
            </p>

            <AnimatePresence>
                {showKeys && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 list-disc list-inside overflow-hidden text-left gray-color max-md:text-[14px]"
                    >
                        <li className="py-[10px] font-bold text-[18px] text-black list-none">
                            Ключевые преимущества:
                        </li>
                        {service.keys.map((key, idx) => (
                            <li key={idx} className="mb-1">
                                {key}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
            <button
                className="mt-3 px-4 py-2 primary-bg cursor-pointer text-white rounded hover:brightness-80 duration-200 max-sm:text-[14px] transition"
                onClick={() => setShowKeys(!showKeys)}
            >
                {showKeys ? "Скрыть детали" : "Показать больше"}
            </button>
        </div>
    );
}
