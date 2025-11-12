"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .optional()
    .refine((val) => !val || val === "" || /^[0-9+\-\s()]{8,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
  message: z
    .string()
    .min(10, "Message must contain at least 10 words")
    .max(150, "Message must not exceed 150 words"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const useContactForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    startTransition(async () => {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Network error");
        const result = await res.json();

        if (result?.success) {
          setSuccessMessage("✅ Register successfully!");
          form.reset();
        } else {
          setErrorMessage("❌ Failed to Register. Please try again.");
        }
      } catch (err) {
        console.error("Error:", err);
        setErrorMessage("❌ Something went wrong. Please try again later.");
      }
    });
  };

  useEffect(() => {
    const subscription = form.watch(() => {
      if (successMessage || errorMessage) {
        setSuccessMessage(null);
        setErrorMessage(null);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch, successMessage, errorMessage]);

  return { form, onSubmit, isPending, successMessage, errorMessage };
};
