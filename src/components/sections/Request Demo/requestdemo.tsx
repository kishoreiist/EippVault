"use client";
import {
  MotionButton,
  MotionDiv,
} from "@/src/motion/motion/framer_motion";
import { useRouter } from "next/navigation";

export default function RequestDemo() {
  const router = useRouter();

  return (
    <>
      <section
        id="request-demo"
        className="w-full py-20 px-6 bg-white"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            max-w-3xl mx-auto bg-white shadow-xl 
            rounded-2xl p-8 sm:p-10 text-center 
            border border-gray-100
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eipp-primary mb-4">
            Ready to Transform Your Document Management?
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-8">
            Get a personalized demo and see how EIPP Vault can improve efficiency,
            automate approvals, and streamline workflows for your team.
          </p>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            onClick={() => router.push("/contact-us")}
            className="
              bg-eipp-secondary text-white px-6 sm:px-8 py-3 
              rounded-lg shadow-lg 
              hover:bg-eipp-primary transition
              text-sm sm:text-base
            "
          >
            Request a Demo
          </MotionButton>
        </MotionDiv>
      </section>
    </>
  );
}
