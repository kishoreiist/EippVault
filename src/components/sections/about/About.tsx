"use client";

import { MotionDiv, MotionSpan } from "@/src/motion/motion/framer_motion";

export default function About() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full"
    >
      <main
        id="about"
        className="w-full bg-bg text-text leading-relaxed overflow-x-hidden"
      >
   
        <section className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-10 text-base sm:text-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold text-eipp-primary mb-6">
            About Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            EIPP Vault helps businesses move from manual paperwork to organized,
            secure, and digital workflows. We provide flexible and user-friendly
            solutions that make daily work faster and more efficient.
            <br />
            Our focus is simple: make information easy to manage, easy to access,
            and easy to trust.
          </p>
        </section>

        <section
          className="
            max-w-5xl mx-auto 
            px-5 sm:px-6 md:px-8 py-8 
            grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14
          "
        >
    
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-eipp-primary">
              Who We Are
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              We are a solution-focused team committed to improving how
              organizations control, store, and share their information.
              <br />
              <br />
              We believe technology should simplify work, not complicate it —
              which is why our systems are designed to be clean, practical, and
              easy to use.
            </p>
          </div>

      
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-eipp-primary mb-3">
              What We Do
            </h2>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="ml-3 sm:ml-6 space-y-2"
            >
              {[
                "Document Management Systems (DMS)",
                "Approval & Workflow Automation",
                "Digital Archiving and Records Management",
                "Secure Data Access and Storage Controls",
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-start space-x-2"
                >
                  <MotionSpan
                    className="text-eipp-primary text-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    •
                  </MotionSpan>
                  <span className="text-sm sm:text-base md:text-lg">
                    {item}
                  </span>
                </MotionDiv>
              ))}
            </MotionDiv>

            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Our solutions help companies reduce paperwork, avoid errors, and
              work smarter every day.
            </p>
          </div>
        </section>

 
        <section className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-10">
          <h2 className="text-lg sm:text-xl font-semibold text-eipp-primary mb-3">
            Industries We Support
          </h2>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="ml-3 sm:ml-6 space-y-2"
          >
            {[
              "Corporates and Business Offices",
              "Manufacturing & Industrial Sectors",
              "Hospitals & Healthcare Services",
              "Financial and Banking Institutions",
              "Government & Public Sector",
              "Educational and Training Institutions",
            ].map((item, index) => (
              <MotionDiv
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-start space-x-2"
              >
                <MotionSpan
                  className="text-eipp-primary text-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  •
                </MotionSpan>

                <span className="text-sm sm:text-base md:text-lg">
                  {item}
                </span>
              </MotionDiv>
            ))}
          </MotionDiv>

          <p className="mt-4 text-sm sm:text-base md:text-lg">
            No matter the industry — if your work involves documents, we make it
            simpler.
          </p>
        </section>

  
        <section className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-8">
          <h2 className="text-lg sm:text-xl font-semibold text-eipp-primary mb-3">
            Our Mission
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            To simplify everyday business operations by transforming paperwork
            into smart, secure, and seamless digital workflows.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-eipp-primary mt-8 mb-3">
            Our Vision
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            To be a trusted partner for organizations looking to work faster,
            stay organized, and operate with confidence in a digital world.
          </p>
        </section>
      </main>
    </MotionDiv>
  );
}
