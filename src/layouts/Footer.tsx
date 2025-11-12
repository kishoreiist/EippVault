"use client";

import { useMemo } from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-eipp-primary  text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-semibold mb-4">EIPP Vault</h3>
          <p className="text-sm mb-2">2/13 Muthumariamman Kovil Street</p>
          <p className="text-sm mb-2">West Tambaram, Chennai, India.</p>
          <p className="text-sm mb-2">📞 +91 9876543210</p>
          <p className="text-sm">✉️ info@eippvault.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#pricing", label: "Pricing" },
              { href: "#contact-us", label: "Contact Us" },
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
          <h3 className="text-xl font-semibold mb-4 ">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-green-200 transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="hover:text-green-200 transition"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-blue-50 mt-10 border-t border-blue-200 pt-4">
        © {currentYear} EIPP Vault. All rights reserved.
      </div>
    </footer>
  );
}
