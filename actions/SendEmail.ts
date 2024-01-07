"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
const resend = new Resend(process.env.EMAIL_API);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("senderEmail");

  if (!validateString(message, 5000) || !validateString(email, 500)) {
    return {
      error: "Invalid Request Data",
    };
  }

  let data;
  try {
    data=await resend.emails.send({
      from: "Portfolio_Contact Form <onboard@resend.dev>",
      to: "mdshihabulislam.mte.ruet@gmail.com",
      subject: "Message from Portfolio website",
      reply_to: email as string,
      //   text: message as string,
      react: React.createElement(
        ContactFormEmail,
        { message: message as string ,senderEmail: email as string},
      ),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
