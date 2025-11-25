"use client";

import { useMemo } from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MotionDiv, MotionSpan } from "@/src/motion/motion/framer_motion";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative
        bg-eipp-primary
        text-white 
        pt-10 sm:pt-14    
        pb-6 sm:pb-8       
        px-3 sm:px-10 
        overflow-hidden
      "
      style={{ willChange: "opacity, transform" }}
    >
      {/* Wave border */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-10"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,120 1080,-40 1440,40 L1440,00 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div> */}

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
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">EIPP Vault</h2>

          <p className="text-sm leading-relaxed mb-1">
            2/13 Muthumariamman Kovil Street
          </p>
          <p className="text-sm leading-relaxed mb-1">
            West Tambaram, Chennai, India.
          </p>

          <Link
            href="mailto:info@eippvault.com"
            className="text-sm leading-relaxed mt-2 hover:text-eipp-secondary transition-colors"
          >
            ✉️ info@eippvault.com
          </Link>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/price", label: "Pricing" },
              { href: "/contact-us", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-green-200 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-5 sm:gap-6 text-2xl">
            {[
              {
                href: "https://www.linkedin.com",
                label: "LinkedIn",
                icon: <FaLinkedin aria-hidden="true" />,
              },
              {
                href: "https://www.facebook.com",
                label: "Facebook",
                icon: <FaFacebook aria-hidden="true" />,
              },
            ].map((social, i) => (
              <MotionSpan
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
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
        </div>
      </div>

      <div className="text-center text-xs sm:text-sm text-blue-50 mt-8 border-t border-blue-200 pt-3">
        © {currentYear} EIPP Vault. All rights reserved.
      </div>
    </MotionDiv>
  );
}
