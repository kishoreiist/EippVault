"use client";

import { useMemo } from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MotionDiv, MotionSpan } from "@/src/motion/motion/framer_motion";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        bg-eipp-primary text-white 
        py-10 sm:py-12 
        px-5 sm:px-10 
        overflow-hidden
      "
    >
 
      <div
        className="
          max-w-6xl mx-auto
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-8 sm:gap-10 md:gap-12
        "
      >

        <MotionDiv
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pr-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4">EIPP Vault</h3>

          <p className="text-sm leading-relaxed mb-1">
            2/13 Muthumariamman Kovil Street
          </p>
          <p className="text-sm leading-relaxed mb-1">
            West Tambaram, Chennai, India.
          </p>

          <p className="text-sm leading-relaxed mt-2">✉️ info@eippvault.com</p>
        </MotionDiv>


        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="pl-1"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#pricing", label: "Pricing" },
              { href: "#contact-us", label: "Contact Us" },
            ].map((link, i) => (
              <MotionDiv
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="hover:text-green-200 transition"
                >
                  {link.label}
                </Link>
              </MotionDiv>
            ))}
          </ul>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-5 sm:gap-6 text-2xl">
            {[
              { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
              { href: "https://www.facebook.com", icon: <FaFacebook /> },
            ].map((social, i) => (
              <MotionSpan
                key={i}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 12 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="hover:text-green-200 transition"
                >
                  {social.icon}
                </Link>
              </MotionSpan>
            ))}
          </div>
        </MotionDiv>
      </div>

      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="
          text-center text-xs sm:text-sm 
          text-blue-50 mt-10 
          border-t border-blue-200 
          pt-4
        "
      >
        © {currentYear} EIPP Vault. All rights reserved.
      </MotionDiv>
    </MotionDiv>
  );
}
