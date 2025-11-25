"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MotionButton,
  MotionDiv,
  MotionImg,
  MotionSpan,
} from "@/src/motion/motion/framer_motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section
      id="home"
      className="relative bg-linear-to-l from-eipp-primary to-eipp-secondary text-white 
      py-16 md:py-28 xl:py-48 px-4 md:px-6 text-center overflow-hidden"
    >
      <MotionDiv
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="relative flex items-center justify-center w-full"
        >
          <div className="absolute w-48 h-48 flex items-center justify-center pointer-events-none">
            {[
              "left",
              "right",
              "top",
              "bottom",
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right",
            ].map((dir, i) => (
              <MotionImg
                key={i}
                src="/doc2.webp"
                className="absolute w-10 h-10"
                loading="lazy"
                initial={{
                  opacity: 0,
                  scale: 0.8,

                  x:
                    dir === "left"
                      ? -150
                      : dir === "right"
                      ? 150
                      : dir === "top-left"
                      ? -120
                      : dir === "bottom-left"
                      ? -120
                      : dir === "top-right"
                      ? 120
                      : dir === "bottom-right"
                      ? 120
                      : 0,

                  y:
                    dir === "top"
                      ? -150
                      : dir === "bottom"
                      ? 150
                      : dir === "top-left"
                      ? -120
                      : dir === "top-right"
                      ? -120
                      : dir === "bottom-left"
                      ? 120
                      : dir === "bottom-right"
                      ? 120
                      : 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: 0,
                  y: 0,
                  scale: [0.8, 0.5, 0],
                  rotate: [0, 15, -15],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="z-10"
          >
            <Link href="/" className="flex items-center justify-center pb-4">
              <Image
                src="/logo6.webp"
                alt="EIPP Vault Logo"
                width={120}
                height={120}
                className="w-24 md:w-28"
              />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.2, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
      font-bold leading-tight mb-4 drop-shadow-lg pb-4 text-white
    "
          >
            {["Safeguarding Your Files,", "Simplifying Your Workflow."].map(
              (word, i) => (
                <MotionSpan
                  key={i}
                  initial={{ opacity: 0, scale: 0.1, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.3,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="block"
                >
                  {word}
                </MotionSpan>
              )
            )}
          </h1>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p
            className="
            text-sm sm:text-base md:text-lg 
            text-blue-50 mb-8 md:mb-10 max-w-3xl mx-auto
          "
          >
            EIPP Vault is your secure, cloud-based document management solution
            <br className="hidden sm:block" />
            combining security, efficiency, and ease of access.
            <br className="hidden sm:block" />
            Smart, Effortless Document Management.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center"
        >
          <MotionButton
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 20px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white text-eipp-secondary font-semibold px-6 py-3 rounded-lg shadow 
              hover:bg-blue-100 transition"
            onClick={() => router.push("/contact-us")}
          >
            Get In Touch
          </MotionButton>
        </MotionDiv>
      </div>

      <MotionSpan
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: [0.1, 0.25, 0.1], y: [60, 40, 60] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-4 sm:left-10 
        text-[3rem] sm:text-[5rem] lg:text-[6rem] text-white/20 select-none"
      >
        ❖
      </MotionSpan>

      <MotionSpan
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: [0.1, 0.25, 0.1], y: [-40, -20, -40] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-4 sm:right-10 
        text-[4rem] sm:text-[6rem] lg:text-[8rem] text-white/15 select-none"
      >
        ✦
      </MotionSpan>
    </section>
  );
}
