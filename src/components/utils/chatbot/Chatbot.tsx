"use client";

import { BotMessageSquare, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useChatbot } from "@/src/hooks/useChatbot";
import {
  MotionAnimatePresence,
  MotionButton,
  MotionDiv,
} from "@/src/motion/motion/framer_motion";

export default function ChatBot() {
  const {
    isOpen,
    setIsOpen,
    messages,
    userInput,
    setUserInput,
    handleUserReply,
  } = useChatbot();

  const [activeTab, setActiveTab] = useState<"chat" | "whatsapp">("chat");

  const whatsappNumber = "919382140303";

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  return (
    <div>
      {!isOpen && (
        <MotionDiv
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 12 }}
        >
          <MotionButton
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            title="Open chat"
            className="relative bg-green-600 text-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <BotMessageSquare className="w-6 h-6" />
            <span className="absolute inset-0 rounded-full bg-eipp-primary blur-xl opacity-30 -z-10"></span>
          </MotionButton>
        </MotionDiv>
      )}

      <MotionAnimatePresence>
        {isOpen && (
          <MotionDiv
            key="chatwindow"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-20 sm:bottom-4 right-4 sm:right-6 
            w-80 sm:w-96 bg-white shadow-2xl rounded-lg border border-gray-300 
            z-50 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between bg-eipp-primary text-white px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="bg-white p-1 rounded-full">
                  <BotMessageSquare className="w-5 h-5 text-eipp-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">EIPP Vault</h3>
                  <p className="text-xs opacity-80">We’ll reply as soon as we can</p>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeTab === "chat" && (
              <div className="flex flex-col flex-1">
                <div
                  ref={scrollRef}
                  className="h-60 overflow-y-auto p-3 space-y-2 bg-gray-50 text-sm scrollbar-thin scrollbar-thumb-gray-300"
                >
                  <MotionAnimatePresence>
                    {messages.map((msg, idx) => (
                      <MotionDiv
                        key={idx}
                        initial={{
                          opacity: 0,
                          x: msg.sender === "user" ? 40 : -40,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`px-3 py-2 rounded-2xl max-w-[75%] leading-snug break-words ${
                          msg.sender === "user"
                            ? "bg-eipp-secondary text-white ml-auto shadow-md"
                            : "bg-gray-200 text-gray-900 mr-auto shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </MotionDiv>
                    ))}
                  </MotionAnimatePresence>
                </div>

                <div className="flex items-center border-t border-gray-200 p-2">
                  <input
                    type="text"
                    className="flex-1 text-sm px-2 py-1 outline-none"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleUserReply(userInput)
                    }
                  />

                  <MotionButton
                    onClick={() => handleUserReply(userInput)}
                    whileTap={{ scale: 0.9 }}
                    className="ml-2 bg-eipp-primary text-white text-sm px-3 py-1 rounded-md"
                  >
                    Send
                  </MotionButton>
                </div>
              </div>
            )}

            {activeTab === "whatsapp" && (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center flex-1 bg-gray-50 p-6 space-y-4"
              >
                <p className="text-gray-700 text-sm text-center">
                  We’d love to hear from you on WhatsApp.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20EIPP%20Vault%20Support!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold 
                  px-4 py-2 rounded-md flex items-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Open WhatsApp</span>
                </a>
              </MotionDiv>
            )}

            <div className="flex justify-center items-center gap-4 p-3 bg-white border-t border-gray-200">
              <MotionButton
                onClick={() => setActiveTab("chat")}
                whileTap={{ scale: 0.85 }}
                className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  activeTab === "chat"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <BotMessageSquare className="w-5 h-5" />
              </MotionButton>

              <MotionButton
                onClick={() => setActiveTab("whatsapp")}
                whileTap={{ scale: 0.85 }}
                className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  activeTab === "whatsapp"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-green-600"
                }`}
              >
                <FaWhatsapp className="w-5 h-5" />
              </MotionButton>
            </div>
          </MotionDiv>
        )}
      </MotionAnimatePresence>
    </div>
  );
}
