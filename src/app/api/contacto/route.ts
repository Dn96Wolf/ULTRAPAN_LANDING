import { contactEmailProductTemplate } from "@/components/templates/ContactProductTemplate";
import { contactEmailTemplate } from "@/components/templates/ContactTemplate";
import { ContactFormData } from "@/interfaces/ContactForm.interface";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, phone, message, product } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obligatorios faltantes" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: Number(465),
      secure: true, // true para 465
      auth: {
        user: "dsbingw@gmail.com",
        pass: "uwmc ecuf xoqn mung",
      },
    });

    if (product) {
      await transporter.sendMail({
        from: `"Ultrapan Contacto"`,
        to: "dsbingw@gmail.com", // aqui es a donde llegan por ejemploa
        subject: `Nuevo mensaje de ${name}`,
        html: contactEmailProductTemplate(body),
      });
    } else {
      await transporter.sendMail({
        from: `"Ultrapan Contacto"`,
        to: "dsbingw@gmail.com", // aqui es a donde llegan por ejemploa
        subject: `Nuevo mensaje de ${name}`,
        html: contactEmailTemplate(body),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);

    return NextResponse.json(
      { error: "Error enviando el correo" },
      { status: 500 },
    );
  }
}
