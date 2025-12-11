import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Title from "../common/title";

export default function SendForm() {
    const [state, handleSubmit] = useForm("xrbnoblo");

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center max-sm:items-stretch max-lg:gap-[10px] gap-[20px]"
        >
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <Title>
                Оставить <span className="primary">Заявку</span>
            </Title>
            <input
                name="name"
                type="text"
                className="text-[18px] max-sm:text-[16px] w-full border-[3px] rounded-[10px] py-[10px] px-[15px] mt-[10px] border-[#ffe9c0]"
                required
                placeholder="Имя или Компания"
            />
            <input
                name="phone"
                id="tel"
                type="tel"
                className="text-[18px] max-sm:text-[16px] w-full border-[3px] rounded-[10px] py-[10px] px-[15px] border-[#ffe9c0]"
                required
                placeholder="Номер телефона"
            />
            <ValidationError prefix="Tel" field="tel" errors={state.errors} />
            <textarea
                name="message"
                id="message"
                placeholder="Сообщение"
                required
                className="text-[18px] max-sm:text-[16px] h-full w-full border-[3px] rounded-[10px] py-[10px] px-[15px] border-[#ffe9c0]"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                className="px-[50px] cursor-pointer max-md:px-[30px] max-sm:text-[15px] max-sm:border-2 max-md:py-[10px] shadow-lg text-center text-white tracking-[0.8px] capitalize primary-bg py-[15px] rounded-[7px] duration-200 transition-colors common-button border-3 border-[#30AFA7] hover:text-[#30AFA7]! font-bold"
            >
                {state.succeeded
                    ? "Заявка отправлена!"
                    : state.submitting
                    ? "Отправляется…"
                    : state.errors
                    ? "Ошибка отправки."
                    : "Оставить заявку"}
            </button>
        </form>
    );
}
