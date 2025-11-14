import { solutionsData } from "@/src/constant/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MotionDiv, MotionSpan } from "@/src/motion/motion/framer_motion";

type tProps = {
  params: { slug: string };
};

export default async function SolutionPage({ params }: tProps) {
  const { slug } = await params;
  const solution = solutionsData.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <main className="min-h-[calc(100vh-70px)] bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-14 md:py-16 overflow-hidden">
    
        <div className="max-w-5xl lg:max-w-6xl mx-auto w-full">

 
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-eipp-primary mb-4 sm:mb-6 leading-tight">
              {solution?.title}
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="
              text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg 
              mb-8 sm:mb-10
            ">
              {solution?.disc}
            </p>
          </MotionDiv>

          <section>
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="
                text-lg sm:text-xl md:text-2xl 
                font-semibold text-eipp-primary mb-4 sm:mb-5
              ">
                Key Benefits
              </h2>
            </MotionDiv>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.15 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {solution?.list.map((point: string, index: number) => (
                <MotionDiv
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="
                    flex items-start gap-3 
                    bg-gray-200 border border-gray-100 rounded-lg 
                    p-3 sm:p-4 md:p-5
                    hover:shadow-md transition
                  "
                >
                  <MotionSpan
                    className="text-eipp-secondary font-bold text-xl sm:text-2xl mt-0.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 10,
                      delay: index * 0.1,
                    }}
                  >
                    •
                  </MotionSpan>

                  <span className="
                    text-gray-700 
                    text-sm sm:text-base md:text-lg 
                    leading-snug
                  ">
                    {point}
                  </span>
                </MotionDiv>
              ))}
            </MotionDiv>
          </section>
        </div>
      </main>
    </Suspense>
  );
}
