"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MotionButton,
  MotionDiv,
  MotionSpan,
} from "@/src/motion/motion/framer_motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-linear-to-l from-eipp-primary to-eipp-secondary text-white py-10 xl:py-48 px-6 text-center overflow-hidden"
    >
      <MotionDiv
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl"
      />

      <div className="max-w-5xl mx-auto justify-center items-center relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center justify-center pb-4">
            <Image
              src="/logo.png"
              alt="EIPP Vault Logo"
              width={120}
              height={120}
            />
          </Link>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg pb-4">
            Safeguarding Your Files,{" "}
            <MotionSpan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-white"
            >
              Simplifying Your Workflow.
            </MotionSpan>
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg text-blue-50 mb-10 max-w-4xl mx-auto">
            EIPP Vault is your secure, cloud-based document management solution
            <br />
            combining security, efficiency, and ease of access for every team.
            <br />
            Smart, Effortless Document Management.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-4 items-center"
        >
          <MotionButton
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 20px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white text-eipp-secondary font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
            onClick={() =>
              document
                .getElementById("contact-us")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </MotionButton>
        </MotionDiv>
      </div>

      <MotionSpan
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: [0.1, 0.25, 0.1], y: [60, 40, 60] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 text-[6rem] text-white/20 select-none"
      >
        ❖
      </MotionSpan>

      <MotionSpan
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: [0.1, 0.25, 0.1], y: [-40, -20, -40] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-16 text-[8rem] text-white/15 select-none"
      >
        ✦
      </MotionSpan>
    </section>
  );
}
