import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      console.error("Missing required fields: email, subject, or message.");
      return NextResponse.json({ error: "Email, subject, and message are required." }, { status: 400 });
    }

    console.log("Sending email with the following details:");
    console.log(`From: ${fromEmail}`);
    console.log(`To: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
