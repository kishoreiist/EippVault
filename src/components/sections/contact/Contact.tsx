"use client";

import { useContactForm } from "@/src/hooks/useContact";
import Image from "next/image";
import { MotionButton, MotionDiv } from "@/src/motion/motion/framer_motion";

export default function ContactUs() {
  const { form, onSubmit, isPending, successMessage, errorMessage } =
    useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section id="contact-us" className="w-full overflow-x-hidden">
      <div className="w-full flex justify-center py-12 sm:py-14 bg-white">
        <div
          className="
            max-w-6xl w-full 
            grid grid-cols-1 md:grid-cols-2 
            gap-10 md:gap-14 
            px-4 sm:px-6 lg:px-8
          "
        >
          <MotionDiv
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            animate={{ y: [0, -12, 0] }}
            className="
              flex items-center justify-center 
              order-1 md:order-2   /* ⭐ Mobile: first | Desktop: second */
              md:ml-6 lg:ml-10
            "
          >
            <Image
              src="/hero.webp"
              width={500}
              height={400}
              alt="Business"
              className="
                w-full 
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                h-auto 
                object-contain
              "
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              px-2 sm:px-4 md:px-8 
              py-4 sm:py-10 
              flex flex-col justify-center
              order-2 md:order-1   /* ⭐ Mobile: after image | Desktop: first */
            "
          >
            <h1 className="text-[24px] sm:text-[26px] md:text-[28px] font-semibold text-eipp-primary leading-tight">
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 sm:mt-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="text-sm">
                    First name *
                  </label>

                  <input
                    id="firstName"
                    {...register("firstName")}
                    disabled={isPending}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm
               focus:outline-none focus:border-[#66B2FF] disabled:opacity-50"
                  />

                  {errors.firstName && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="text-sm">
                    Last name *
                  </label>

                  <input
                    id="lastName"
                    {...register("lastName")}
                    disabled={isPending}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
               focus:outline-none focus:border-[#66B2FF] disabled:opacity-50"
                  />

                  {errors.lastName && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="text-sm">
                  Company Name *
                </label>

                <input
                  id="companyName"
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
               focus:outline-none focus:border-[#66B2FF] disabled:opacity-50"
                />

                {errors.companyName && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm">
                  Email *
                </label>

                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
               focus:outline-none focus:border-[#66B2FF] disabled:opacity-50"
                />

                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm">
                  Phone number
                </label>

                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
               focus:outline-none focus:border-[#66B2FF] disabled:opacity-50"
                />

                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm">
                  Message *
                </label>

                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  disabled={isPending}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
               focus:outline-none focus:border-[#66B2FF] disabled:opacity-50 resize-none"
                ></textarea>

                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <MotionButton
                type="submit"
                disabled={isPending}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full py-3 text-sm font-medium rounded-md 
                  bg-eipp-secondary hover:bg-eipp-primary 
                  text-white transition-all 
                  flex justify-center items-center gap-2 
                  disabled:opacity-70
                "
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
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
