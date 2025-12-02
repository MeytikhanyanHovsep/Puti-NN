import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Пример отправки
export async function POST(request: Request) {
    const mail = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    const { name, phone, message } = await request.json();

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: mail,
                pass: pass,
            },
            tls: { rejectUnauthorized: false },
        });

        await transporter.sendMail({
            from: mail,
            to: mail,
            subject: "Новая Заявка",
            text: "Есть новая заявка",
            html: `<p>Имя: ${name}</p><br /><p>Номер: ${phone}</p><br/> <p>Сообщения: ${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: error?.message });
    }
}
