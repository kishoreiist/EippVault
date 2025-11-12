
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

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<ProductLoading />}>
      <main className="min-h-[calc(100vh-100px)] bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto p-8">
          <div className="space-y-6 col-span-3">
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-semibold text-eipp-primary">
                {product?.title}
              </h1>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product?.description}
              </p>
            </MotionDiv>

            <section className="mt-8">
              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <h2 className="text-xl font-semibold text-eipp-primary mb-5">
                  Key Capabilities
                </h2>
              </MotionDiv>

              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className="space-y-4"
              >
                {product?.list?.map((point: string, index: number) => (
                  <MotionDiv
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <MotionSpan
                      className="text-eipp-secondary font-bold text-xl mt-0.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 250, damping: 14 }}
                    >
                      •
                    </MotionSpan>
                    <span className="text-gray-700">{point}</span>
                  </MotionDiv>
                ))}
              </MotionDiv>
            </section>
          </div>
        </div>
      </main>
    </Suspense>
  );
}

const ProductLoading = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2"></div>
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-20 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
        <div className="h-[520px] bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>
    </main>
  );
};
