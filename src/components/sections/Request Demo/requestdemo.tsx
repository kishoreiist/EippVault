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

      {/* ---------------- REQUEST DEMO SECTION ---------------- */}
      <section
        id="request-demo"
        className="relative w-full py-20 px-6 overflow-hidden bg-white"
      >
        {/* Decorative Corner Blobs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-eipp-secondary/20 rounded-br-3xl blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-eipp-primary/20 rounded-tl-3xl blur-xl"></div>

        {/* Floating Circle Animation */}
        <div className="absolute -top-10 right-10 w-20 h-20 bg-eipp-primary/10 rounded-full animate-pulse"></div>

        {/* Content Card */}
        <MotionDiv
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            max-w-3xl mx-auto bg-white shadow-xl 
            rounded-2xl p-10 text-center border border-gray-100
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-eipp-primary mb-4">
            Ready to Transform Your Document Management?
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-8">
            Get a personalized demo and see how EIPP Vault can improve efficiency,
            automate approvals, and streamline workflows for your team.
          </p>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() =>
             router.push("/contact-us")
            }
            className="
              bg-eipp-secondary text-white px-8 py-3 
              rounded-lg shadow-lg 
              hover:bg-eipp-primary transition
            "
          >
            Request a Demo
          </MotionButton>
        </MotionDiv>
      </section>

    </>
  );
}
