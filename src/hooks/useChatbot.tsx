"use client";
import { useState, useEffect, useRef } from "react";

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
      if (!result.success) console.error("❌ API Error:", result.error);
    } catch (err) {
      console.error("❌ Network Error:", err);
    }
  };


  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  
  const isName = (val: string) => /^[A-Za-z ]{2,30}$/.test(val);
  const isEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.toLowerCase());
  const isPhone = (val: string) =>
    /^[0-9]{10,15}$/.test(val.replace(/[^0-9]/g, ""));


  const handleUserReply = async (text: string) => {
    if (!text.trim()) return;

    const reply = text.trim();

 
    setMessages((prev) => [...prev, { sender: "user", text: reply }]);
    setUserInput("");

  
    if (step === 1) {
      if (!isName(reply)) {
        return setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Please enter a valid first name " },
        ]);
      }

      setFormData((p) => ({ ...p, firstName: reply }));
      setStep(2);
      return setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Thanks! What’s your last name?" },
        ]);
      }, 600);
    }

    if (step === 2) {
      if (!isName(reply)) {
        return setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Please enter a valid last name " },
        ]);
      }

      setFormData((p) => ({ ...p, lastName: reply }));
      setStep(3);
      return setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Great! What's your company name?" },
        ]);
      }, 600);
    }

    if (step === 3) {
      if (reply.length < 2) {
        return setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Company name cannot be empty " },
        ]);
      }

      setFormData((p) => ({ ...p, company: reply }));
      setStep(4);
      return setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Can you share your email address?" },
        ]);
      }, 600);
    }

    if (step === 4) {
      if (!isEmail(reply)) {
        return setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Please enter a valid email address " },
        ]);
      }

      setFormData((p) => ({ ...p, email: reply }));
      setStep(5);
      return setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "And your phone number? (optional)" },
        ]);
      }, 600);
    }

    if (step === 5) {
      if (reply && !isPhone(reply)) {
        return setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Phone number must be at least 10 digits ",
          },
        ]);
      }

      setFormData((p) => ({ ...p, phone: reply }));
      setStep(6);
      return setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Finally, how can we help you?" },
        ]);
      }, 600);
    }

    if (step === 6) {
      if (reply.length < 3) {
        return setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please describe your requirement in a few words ",
          },
        ]);
      }

      setFormData((p) => ({ ...p, requirement: reply }));
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

      await sendToBackend({
        ...formData,
        requirement: reply,
      });
    }
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    userInput,
    setUserInput,
    handleUserReply,
    bottomRef,
  };
}
