// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//     try {
//         // Получаем данные из формы
//         const { name, email, message } = await req.json();

//         if (!name || !email || !message) {
//             return NextResponse.json(
//                 { success: false, error: "Заполните все поля" },
//                 { status: 400 }
//             );
//         }

//         // Создаём транспортер SMTP
//         const transporter = nodemailer.createTransport({
//             service: "yandex", // или "gmail" если используем Gmail
//             auth: {
//                 user: process.env.MAIL_USER, // Техническая почта клиента
//                 pass: process.env.MAIL_PASSWORD, // App Password клиента
//             },
//         });

//         // Отправка письма
//         await transporter.sendMail({
//             from: process.env.MAIL_USER, // Письмо идёт с технической почты клиента
//             to: process.env.MAIL_USER, // Получатель — та же почта (можно менять)
//             subject: "Новая заявка с сайта",
//             text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
//             html: `
//         <h2>Новая заявка с сайта</h2>
//         <p><b>Имя:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Сообщение:</b> ${message}</p>
//       `,
//         });

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error("Ошибка при отправке письма:", error);
//         return NextResponse.json(
//             { success: false, error: "Ошибка сервера" },
//             { status: 500 }
//         );
//     }
// }
