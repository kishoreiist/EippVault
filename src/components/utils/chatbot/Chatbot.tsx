"use client";

import { BotMessageSquare, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 
import { useState } from "react";
import { useChatbot } from "@/src/hooks/useChatbot";

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


  const whatsappNumber = "919876543210";

  return (
    <div>
  
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            title="Open chat"
            className="relative  bg-green-600 text-white 
                       p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <BotMessageSquare className="w-6 h-6" />
            <span className="absolute inset-0 rounded-full bg-eipp-primary blur-xl opacity-30 -z-10"></span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-4 right-4 sm:right-6 w-80 sm:w-96 bg-white shadow-2xl rounded-lg border border-gray-300 z-50 flex flex-col overflow-hidden">
          
    
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
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              title="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {activeTab === "chat" && (
            <div className="flex flex-col flex-1">
              <div className="h-60 overflow-y-auto p-3 space-y-2 bg-gray-50 text-sm">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-2xl max-w-[75%] leading-snug ${
                      msg.sender === "user"
                        ? "bg-eipp-secondary text-white ml-auto text-right shadow-md font-medium"
                        : "bg-gray-200 text-gray-900 mr-auto text-left shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <div className="flex items-center border-t border-gray-200 p-2">
                <input
                  type="text"
                  className="flex-1 text-sm px-2 py-1 outline-none"
                  placeholder="Type your message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUserReply(userInput)}
                />
                <button
                  onClick={() => handleUserReply(userInput)}
                  className="ml-2 bg-eipp-primary text-white text-sm px-3 py-1 rounded-md hover:bg-eipp-primary-dark transition"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {activeTab === "whatsapp" && (
            <div className="flex flex-col items-center justify-center flex-1 bg-gray-50 p-6 space-y-4">
              <p className="text-gray-700 text-sm text-center">
                We’d love to hear from you on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20EIPP%20Vault%20Support!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" /> 
                <span>Open WhatsApp</span>
              </a>
            </div>
          )}

  
          <div className="flex justify-center items-center gap-4 p-3 bg-white border-t border-gray-200">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition ${
                activeTab === "chat"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <BotMessageSquare className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition ${
                activeTab === "whatsapp"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-green-600 hover:bg-green-100"
              }`}
            >
              <FaWhatsapp className="w-5 h-5" /> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
