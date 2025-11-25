"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  MotionDiv,
  MotionAnimatePresence,
} from "@/src/motion/motion/framer_motion";
import { menus } from "../constant/NavLinks";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleSubMenu = (menuName: string) => {
    setOpenSub(openSub === menuName ? null : menuName);
  };

  return (
    <>
      <div
        onMouseLeave={() => setActiveMenu(null)}
        className="flex justify-between items-center px-6 py-3 bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
      >
        <Link href="/" className="flex items-center space-x-6 pl-4">
          <Image src="/logo6.webp" alt="Logo" width={55} height={55} />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium relative">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="relative group"
              onMouseEnter={() => setActiveMenu(menu.name)}
            >
              {menu.submenu ? (
                <button
                  className="text-gray-700 hover:text-eipp-primary transition"
                  onClick={() => setActiveMenu(menu.name)}
                >
                  {menu.name}
                </button>
              ) : (
                <Link
                  href={menu.href}
                  className="text-gray-700 hover:text-eipp-primary transition"
                >
                  {menu.name}
                </Link>
              )}


              {menu.submenu && activeMenu === menu.name && (
                <div
                  className="
            absolute left-0 mt-3 
            min-w-[360px]
            bg-gray-300 shadow-lg 
            rounded-md py-2 
          "
                >
                  {menu.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                      onClick={() => setActiveMenu(null)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button onClick={() => setOpenMobile(true)} className="md:hidden">
          <Menu size={30} />
        </button>
      </div>
      <MotionAnimatePresence>
        {openMobile && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[60]"
            onClick={() => setOpenMobile(false)}
          />
        )}
      </MotionAnimatePresence>

      <MotionAnimatePresence>
        {openMobile && (
          <MotionDiv
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-72 h-full bg-white z-[70] p-6 shadow-lg overflow-y-auto"
          >
            <button
              onClick={() => setOpenMobile(false)}
              className="self-end mb-6"
            >
              <X size={28} />
            </button>

            <div className="space-y-4">
              {menus.map((menu) => (
                <div key={menu.name}>
                  <button
                    onClick={() =>
                      menu.submenu
                        ? toggleSubMenu(menu.name)
                        : setOpenMobile(false)
                    }
                    className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-base"
                  >
                    <Link href={menu.href} className="flex-1">
                      {menu.name}
                    </Link>

                    {menu.submenu &&
                      (openSub === menu.name ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      ))}
                  </button>
                  {menu.submenu && openSub === menu.name && (
                    <MotionDiv
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {menu.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setOpenMobile(false)}
                          className="block text-gray-600 text-sm py-1"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </MotionDiv>
                  )}
                </div>
              ))}
            </div>

          </MotionDiv>
        )}
      </MotionAnimatePresence>
    </>
  );
}
