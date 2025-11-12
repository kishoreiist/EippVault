export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { appendFile, mkdir, access, constants } from "fs/promises";
import path from "path";

type tContactRequestBody = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const data: tContactRequestBody = await req.json();
    const { firstName, lastName, companyName, email, phone, message } = data;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 30px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
          <div style="background-color: #0066b3; color: #fff; padding: 18px 25px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Register Message - EIPP Vault</h2>
          </div>
          <div style="padding: 25px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="font-weight:bold; padding:8px;">First Name:</td><td>${firstName}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Last Name:</td><td>${lastName}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Company Name:</td><td>${companyName}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Email:</td><td>${email}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Phone:</td><td>${phone || "N/A"}</td></tr>
              <tr><td style="font-weight:bold; padding:8px; vertical-align:top;">Message:</td><td>${message}</td></tr>
            </table>
            <p style="margin-top:25px; font-size:13px; color:#666;">This message was sent from EIPP Vault's register form.</p>
          </div>
          <div style="background-color:#f3f4f6; padding:15px; text-align:center; font-size:13px; color:#777;">
            <p style="margin:0;">EIPP Vault — Chennai, India</p>
            <a href="https://eippvault.com" style="color:#0066b3; text-decoration:none;">www.eippvault.com</a>
          </div>
        </div>
      </div>
    `;

    // --- Setup mail transporter ---
    const transporter = nodemailer.createTransport({
      host: "smtp.socketlabs.com",
      port: 587,
      secure: false,
      auth: {
        user: "server37848",
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    // --- Local logging setup ---
    const logsDir = path.join(process.cwd(), "contact_logs");
    const logFile = path.join(logsDir, "contacts.json");

    try {
      // Ensure directory exists
      await access(logsDir, constants.F_OK).catch(async () => {
        await mkdir(logsDir, { recursive: true });
      });
    } catch (dirErr) {
      console.error("❌ Failed to create log directory:", dirErr);
    }

    // --- Create log entry ---
    const logEntry = {
      firstName,
      lastName,
      companyName,
      email,
      phone: phone || "N/A",
      message,
      date: new Date().toISOString(),
    };

    try {
      await appendFile(logFile, JSON.stringify(logEntry) + "\n", "utf8");
      console.log("✅ Contact data saved locally:", logEntry);
    } catch (writeErr) {
      console.error("❌ Error writing log file:", writeErr);
    }

    // --- Send email notification ---
    await transporter.sendMail({
      from: "info@eippvault.com",
      to: "info@eippvault.com",
      replyTo: email,
      subject: "New Register Message - EIPP Vault",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ Error in /api/register:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
