import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email aur message zaroori hain." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Yaran e Khair - Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject || "No Subject"}`,
    html: `
      <h2>New Contact Form Message</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "Not provided"}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${subject || "Not provided"}</td></tr>
        <tr><td><strong>Message</strong></td><td>${message}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email bhejne mein masla hua. Dobara koshish karein." },
      { status: 500 }
    );
  }
}
