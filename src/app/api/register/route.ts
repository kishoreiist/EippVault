export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir, access, constants } from "fs/promises";
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
          </div>
        </div>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.socketlabs.com",
      port: 587,
      secure: false,
      auth: {
        user: "server37848",
        pass: process.env.SMTP_PASSWORD!,
      },
    });


    if (process.env.NODE_ENV === "development") {
      const logsDir = path.join(process.cwd(), "contact_logs");
      const logFile = path.join(logsDir, "contacts.json");

    
      await access(logsDir, constants.F_OK).catch(async () => {
        await mkdir(logsDir, { recursive: true });
      });

 
      let existingData: any[] = [];
      try {
        const fileContent = await readFile(logFile, "utf8");
        existingData = JSON.parse(fileContent);
      } catch {
        existingData = [];
      }


      existingData.push({
        firstName,
        lastName,
        companyName,
        email,
        phone: phone || "N/A",
        message,
        date: new Date().toISOString(),
      });


      await writeFile(logFile, JSON.stringify(existingData, null, 2), "utf8");

      console.log("📁 Saved to local contacts.json");
    } else {
      console.log("⚠ Skipping file storage — running in production");
    }

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
