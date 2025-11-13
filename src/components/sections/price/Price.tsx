"use client";

import React from "react";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/src/constant/data";
import { MotionDiv } from "@/src/motion/motion/framer_motion";

const Price: React.FC = () => {
  return (
    <section id="pricing" className="w-full">
      <div className="bg-gray-100">

        <div className="text-center py-10 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-eipp-primary">
            Choose the Plan that Fits Your Team
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base px-2">
            Simple pricing. No hidden fees. Scale as you grow.
          </p>
        </div>

        <div className="flex items-center justify-center px-4 pb-20 md:pb-32">
          <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

            {pricingPlans.map((plan, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
              >
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  delivery={plan.delivery}
                  highlight={plan.highlight}
                />
              </MotionDiv>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Price;
