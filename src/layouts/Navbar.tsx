"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import {
  MotionDiv,
  MotionButton,
  MotionAnimatePresence,
} from "@/src/motion/motion/framer_motion";
import { menus } from "../constant/NavLinks";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandMenu, setExpandMenu] = useState<string | null>(null);

  return (
    <>

      <MotionDiv
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-6 py-3 bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
      >

        <Link href="/" className="flex items-center space-x-2">
          <MotionDiv whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }}>
            <Image
              src="/logo.png"
              alt="EIPP Vault Logo"
              width={75}
              height={75}
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
              onMouseLeave={() => setActiveMenu(null)}
            >
              <MotionDiv whileHover={{ y: -2 }}>
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
                  className="absolute left-0 mt-3 w-[260px] bg-gray-200 shadow-lg rounded-md py-2 border border-gray-100"
                >
                  {menu.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 hover:text-eipp-primary hover:bg-gray-50 text-sm"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </MotionDiv>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-eipp-secondary text-white px-4 py-1.5 rounded-md font-medium shadow hover:bg-eipp-primary"
            onClick={() =>
              document.getElementById("contact-us")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Request a demo
          </MotionButton>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileOpen(true)}>
          <Menu className="w-7 h-7 text-gray-700" />
        </button>
      </MotionDiv>

      <MotionAnimatePresence>
        {isMobileOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[999]"
            onClick={() => setIsMobileOpen(false)}
          >
            <MotionDiv
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="absolute top-0 left-0 w-72 h-full bg-white shadow-xl p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex items-center justify-between mb-6">
                <Image src="/logo.png" width={70} height={70} alt="Logo" />
                <button onClick={() => setIsMobileOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {menus.map((menu) => (
                  <div key={menu.name} className="border-b border-gray-200 pb-2">
                    <button
                      className="w-full flex justify-between items-center text-left text-gray-900 font-semibold text-lg"
                      onClick={() => {
                        if (menu.submenu) {
                          setExpandMenu(
                            expandMenu === menu.name ? null : menu.name
                          );
                        } else {
                    
                          if (menu.href === "/") {
                            window.location.href = "/";
                            setIsMobileOpen(false);
                            return;
                          }

                          const id = menu.href.replace("/#", "").replace("#", "");
                          const target = document.getElementById(id);

                          if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                            setTimeout(() => setIsMobileOpen(false), 300);
                          }
                        }
                      }}
                    >
                      {menu.name}
                      {menu.submenu && (
                        <span>{expandMenu === menu.name ? "▲" : "▶"}</span>
                      )}
                    </button>

                    {menu.submenu && expandMenu === menu.name && (
                      <MotionDiv
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {menu.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-gray-600"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </MotionDiv>
                    )}
                  </div>
                ))}
              </nav>

              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  document.getElementById("contact-us")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="mt-8 bg-eipp-secondary text-white px-4 py-2 rounded-md w-full font-medium"
              >
                Request a demo
              </button>
            </MotionDiv>
          </MotionDiv>
        )}
      </MotionAnimatePresence>
    </>
  );
}
