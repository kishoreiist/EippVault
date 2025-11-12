"use client";
import { useState, useEffect } from "react";

interface Message {
  sender: "bot" | "user";
  text: string;
}

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const sendToBackend = async (data: any) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          companyName: data.company,
          email: data.email,
          phone: data.phone,
          message: data.requirement,
        }),
      });

      const result = await res.json();

      if (result.success) {
        console.log("✅ Contact details sent successfully:", data);
      } else {
        console.error("❌ Error sending contact details:", result.error);
      }
    } catch (err) {
      console.error("❌ Network or server error:", err);
    }
  };


  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openChatBox", handleOpen);
    return () => window.removeEventListener("openChatBox", handleOpen);
  }, []);

 
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: "bot", text: "Hi 👋 Welcome to EIPP Vault!" }]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "May I have your first name?" },
        ]);
        setStep(1);
      }, 700);
    }
  }, [isOpen, messages.length]);


  const handleUserReply = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setUserInput("");

    if (step === 1) {
      setFormData((prev) => ({ ...prev, firstName: text }));
      setStep(2);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Thanks! What’s your last name?" },
        ]);
      }, 600);
    } else if (step === 2) {
      setFormData((prev) => ({ ...prev, lastName: text }));
      setStep(3);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Great! What's your company name?" },
        ]);
      }, 600);
    } else if (step === 3) {
      setFormData((prev) => ({ ...prev, company: text }));
      setStep(4);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Can you share your email address?" },
        ]);
      }, 600);
    } else if (step === 4) {
      setFormData((prev) => ({ ...prev, email: text }));
      setStep(5);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "And your phone number? (optional)" },
        ]);
      }, 600);
    } else if (step === 5) {
      setFormData((prev) => ({ ...prev, phone: text }));
      setStep(6);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Finally, how can we help you?" },
        ]);
      }, 600);
    } else if (step === 6) {
      setFormData((prev) => ({ ...prev, requirement: text }));
      setStep(7);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Thank you! Our team will contact you shortly 😊",
          },
        ]);
      }, 600);

      console.log("📩 New Lead Captured:", {
        ...formData,
        requirement: text,
      });

     
      await sendToBackend({ ...formData, requirement: text });
    }
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    userInput,
    setUserInput,
    handleUserReply,
    step,
    formData,
  };
}
