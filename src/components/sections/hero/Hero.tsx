"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MotionButton,
  MotionDiv,
  MotionSpan,
} from "@/src/motion/motion/framer_motion";
import { FileText, Pencil, BookOpen } from "lucide-react"
import { useRouter } from "next/navigation";


export default function Hero() {
 const router = useRouter();
  const IconList = [
    FileText,
    Pencil,
    BookOpen,
    FileText,
    Pencil,
    BookOpen,
    FileText,
    Pencil,
  ];

  const IconColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFD93D",
    "#9D4EDD",
    "#FF8E3C",
    "#00C49A",
    "#E63946",
  ];

  return (
    <section
      id="home"
      className="relative bg-linear-to-l from-eipp-primary to-eipp-secondary text-white 
      py-16 md:py-28 xl:py-48 px-4 md:px-6 text-center overflow-hidden"
    >
      <MotionDiv
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl overflow-hidden"
        style={{ transformOrigin: "center" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
            ].map((dir, i) => {
              const Icon = IconList[i];

              return (
                <MotionDiv
                  key={i}
                  className="absolute text-eipp-primary"
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
                    duration: 1,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                >
                  <Icon size={56} className="bold" color={IconColors[i] } />
                </MotionDiv>
              );
            })}
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
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold leading-tight 
              mb-4 drop-shadow-lg pb-4
            "
          >
            {["Safeguarding Your Files,", "Simplifying Your Workflow."].map(
              (line, i) => (
                <MotionSpan
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.3 }}
                  className="block"
                >
                  {line}
                </MotionSpan>
              )
            )}
          </h1>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-8 max-w-3xl mx-auto">
            EIPP Vault is your secure, cloud-based document management solution.
            <br className="hidden sm:block" />
            Combining security, efficiency, and ease of access.
            <br className="hidden sm:block" />
            Smart, Effortless Document Management.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center"
        >
          <MotionButton
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="
              bg-white text-eipp-secondary 
              font-semibold px-6 py-3 
              rounded-lg shadow 
              hover:bg-blue-100 
              transition
            "
            onClick={() =>
             router.push("/contact-us")
            }
          >
            Get In Touch
          </MotionButton>
        </MotionDiv>
      </div>

      <MotionSpan
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.3, 0.15], y: [60, 30, 60] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-6 left-4 text-[4rem] text-white/20 select-none"
      >
        ❖
      </MotionSpan>

      <MotionSpan
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1], y: [-50, -20, -50] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-6 right-4 text-[5rem] text-white/15 select-none"
      >
        ✦
      </MotionSpan>
    </section>
  );
}
