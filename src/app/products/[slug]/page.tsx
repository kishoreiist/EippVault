import { productsData } from "@/src/constant/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MotionDiv, MotionSpan } from "@/src/motion/motion/framer_motion";

type tProps = {
  params: { slug: string };
};

export default async function ProductPage({ params }: tProps) {
  const { slug } = await params;
  const product = productsData.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <Suspense fallback={<ProductLoading />}>
      <main
        className="
          min-h-[calc(100vh-90px)]
          bg-gray-50 
          px-4 sm:px-6 md:px-12 lg:px-20 
          py-10 sm:py-14 md:py-16
        "
      >
        <div className="max-w-5xl lg:max-w-6xl mx-auto w-full">


          <MotionDiv
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h1
              className="
                text-2xl sm:text-3xl md:text-4xl 
                font-semibold text-eipp-primary 
                leading-tight mb-4 sm:mb-6
              "
            >
              {product?.title}
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p
              className="
                text-gray-700 
                leading-relaxed
                text-sm sm:text-base md:text-lg 
                mb-8 sm:mb-10
                whitespace-pre-line
              "
            >
              {product?.description}
            </p>
          </MotionDiv>


          <section className="mt-4 sm:mt-6 md:mt-10">
            <MotionDiv
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h2
                className="
                  text-lg sm:text-xl md:text-2xl 
                  font-semibold text-eipp-primary 
                  mb-4 sm:mb-6
                "
              >
                Key Capabilities
              </h2>
            </MotionDiv>


            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="space-y-3 sm:space-y-4"
            >
              {product?.list?.map((point: string, index: number) => (
                <MotionDiv
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="
                    flex items-start gap-3 
                    bg-white border border-gray-200 
                    rounded-lg 
                    p-3 sm:p-4 md:p-5
                    shadow-sm hover:shadow-md 
                    transition
                  "
                >

                  <MotionSpan
                    className="
                      text-eipp-secondary 
                      font-bold 
                      text-xl sm:text-2xl 
                      mt-0.5
                    "
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 18,
                    }}
                  >
                    •
                  </MotionSpan>

                  <span
                    className="
                      text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-snug
                    "
                  >
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

const ProductLoading = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl lg:max-w-6xl mx-auto space-y-8">
        <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3"></div>
        <div className="h-24 bg-gray-200 rounded animate-pulse"></div>

        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2"></div>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-20 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </main>
  );
};
