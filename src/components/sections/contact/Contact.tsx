"use client";

import { useContactForm } from "@/src/hooks/useContact";
import Image from "next/image";
import { motion } from "motion/react";
import { MotionButton } from "@/src/motion/motion/framer_motion";

export default function ContactUs() {
  const { form, onSubmit, isPending, successMessage, errorMessage } =
    useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section id="contact-us">
      <div className="w-full flex justify-center py-14 bg-white">
        <div className="max-w-6xl w-full grid md:grid-cols-2 min-h-[650px] gap-6 px-4 md:px-0">
          
          {/* LEFT — CONTACT FORM (animated) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="px-10 md:px-14 py-10 flex flex-col justify-center"
          >
            <h1 className="text-[28px] font-semibold text-eipp-primary leading-tight">
              Let’s level up your brand, <br /> together
            </h1>

            <p className="text-sm text-gray-600 mt-2">
              You can reach us anytime via{" "}
              <a
                href="mailto:info@eippvault.com"
                className="text-[#006DB3] font-medium"
              >
                info@eippvault.com
              </a>
            </p>

            {/* Success & Error Messages */}
            {successMessage && (
              <div className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-md mt-6 border border-green-300">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded-md mt-6 border border-red-300">
                {errorMessage}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm">First name *</label>
                  <input
                    {...register("firstName")}
                    disabled={isPending}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                    focus:outline-none focus:border-[#66B2FF] transition-all disabled:opacity-50"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm">Last name *</label>
                  <input
                    {...register("lastName")}
                    disabled={isPending}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                    focus:outline-none focus:border-[#66B2FF] transition-all disabled:opacity-50"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm">Company Name *</label>
                <input
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                  focus:outline-none focus:border-[#66B2FF] transition-all disabled:opacity-50"
                />
                {errors.companyName && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm">Email *</label>
                <input
                  {...register("email")}
                  type="email"
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                  focus:outline-none focus:border-[#66B2FF] transition-all disabled:opacity-50"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm">Phone number</label>
                <input
                  {...register("phone")}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                  focus:outline-none focus:border-[#66B2FF] transition-all disabled:opacity-50"
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm">Message *</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                  focus:outline-none focus:border-[#66B2FF] transition-all disabled:opacity-50"
                />
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* ✅ Animated Submit Button */}
              <MotionButton
                type="submit"
                disabled={isPending}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 text-sm font-medium rounded-md bg-eipp-secondary 
                hover:bg-eipp-primary text-white transition-all flex justify-center 
                items-center gap-2 disabled:opacity-70"
              >
                {isPending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Get started"
                )}
              </MotionButton>
            </form>
          </motion.div>

          {/* RIGHT — IMAGE (Floating animation) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            animate={{ y: [0, -12, 0] }}
            className="flex items-center justify-center ml-4 md:ml-12 pl-2"
          >
            <Image
              src="/hero.png"
              width={500}
              height={400}
              alt="Business"
              className="w-full h-auto max-h-[600px] object-right"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
