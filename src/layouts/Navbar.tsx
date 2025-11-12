"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { menus } from "../constant/NavLinks";
import { MotionDiv, MotionButton } from "@/src/motion/motion/framer_motion"; 

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <MotionDiv
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseLeave={() => setActiveMenu(null)}
      className="flex justify-between items-center px-8 py-3 bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
    >
      <Link href="/" className="flex items-center space-x-2">
        <MotionDiv
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <Image
            src="/logo.png"
            alt="EIPP Vault Logo"
            width={80}
            height={80}
            priority
          />
        </MotionDiv>
      </Link>


      <nav className="hidden md:flex space-x-8 text-sm font-medium relative">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="relative group"
            onMouseEnter={() => setActiveMenu(menu.name)}
          >
            <MotionDiv whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href={menu.href}
                className="text-gray-700 hover:text-eipp-primary transition-colors"
              >
                {menu.name}
              </Link>
            </MotionDiv>

            {menu.submenu && activeMenu === menu.name && (
              <MotionDiv
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 mt-3 w-[280px] bg-gray-200 shadow-lg rounded-md py-2 border border-gray-100 before:content-[''] before:absolute before:-top-2 before:left-6 before:w-3 before:h-3 before:bg-gray-200 before:border-t before:border-l before:border-gray-200 before:rotate-45"
              >
                {menu.submenu.map((sub) => (
                  <MotionDiv
                    key={sub.name}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      onClick={() => setActiveMenu(null)}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-eipp-primary text-sm font-light"
                    >
                      {sub.name}
                    </Link>
                  </MotionDiv>
                ))}
              </MotionDiv>
            )}
          </div>
        ))}
      </nav>


      <MotionButton
        onClick={() =>
          document.getElementById("contact-us")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="bg-eipp-secondary text-sm px-4 py-1.5 rounded-md text-white font-medium shadow-sm hover:bg-eipp-primary transition-colors"
      >
        Request a demo
      </MotionButton>
    </MotionDiv>
  );
}
