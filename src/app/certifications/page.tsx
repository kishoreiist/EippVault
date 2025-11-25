"use client";

import { certifications } from "@/src/constant/data";
import { MotionDiv } from "@/src/motion/motion/framer_motion";

export default function Certifications() {
  return (
    <main
      id="certifications"
      className="w-full bg-linear-to-b from-gray-50 to-white text-gray-800 py-14 sm:py-16"
    >

      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}   
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 text-center mb-12"
      >
        <h2 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2">
          Our Standards
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eipp-primary leading-snug">
          Our <span className="text-yellow-500">Certified Excellence</span> Journey
        </h1>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We uphold globally recognized certifications that ensure security,
          reliability, and quality across every aspect of our operations.
        </p>
      </MotionDiv>


      <div
        className="
          max-w-5xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
          gap-6 sm:gap-8 md:gap-10 
          px-5 sm:px-6 md:px-8
        "
      >
        {certifications.map((cert, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}            
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}      
            transition={{ duration: 0.35 }}         
            whileHover={{
              scale: 1.03,                            
              transition: { type: "spring", stiffness: 180 },
            }}
            className="
              bg-white rounded-2xl shadow-md 
              hover:shadow-[0_0_18px_4px_rgba(78,169,226,0.45)]
              transition-all duration-200 
              p-5 sm:p-6 md:p-8
              flex flex-col items-center text-center border border-gray-100
            "
          >

            <div className="overflow-hidden rounded-xl w-full flex justify-center mb-6">
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"                           
                decoding="async"                           
                className={`w-auto max-h-32 sm:max-h-40 md:max-h-44 object-contain ${cert.imgHeight}`}
              />
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mt-2 leading-snug">
              {cert.title}
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
              {cert.description}
            </p>

            <div className="mt-5 w-16 sm:w-20 h-[3px] bg-linear-to-r from-eipp-primary to-eipp-secondary rounded-full"></div>
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
