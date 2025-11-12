 
"use client";
import { cn } from "@/src/lib/utils";
// import { MotionButton } from "@/components/motion/framer_motion";

// import { HTMLMotionProps } from "motion/react";
import Link from "next/link";
import React from "react";
type BtnProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};
type LinkProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  prefetch?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const variants = {
  primary: "bg-arco-primary text-white  hover:bg-arco-primary/80 ",
  secondary: "bg-arco-secondary text-white  hover:bg-arco-secondary/80 ",
  danger: "bg-red-500 text-white  hover:bg-red-400 ",
  plain: "border bg-white  hover:bg-accent hover:text-accent-foreground",
  outline:
    "text-arco-primary hover:bg-arco-primary/30 border-1 border-arco-primary",
  filled: "bg-arco-primary text-white  ",
  fade_bg:
    "bg-arco-primary-50 text--primary hover:border   hover:bg-arco-primary-100 hover:border-arco-primary-100",
  verified: "bg-green-100 text-green-600 ",
};
export const sizes = {
  smaller: "text-sm px-2 py-1 font-medium ",
  small: "text-[.9375rem] px-3 py-1  ",
  default: "text-base px-3    py-1  ",
  large: "text-lg px-6 py-2 rounded-lg font-medium",
};

export const Button = ({
  variant,
  size,
  className,
  disabled,
  type = "button",
  children,
  ...rest
}: BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-sm shadow-xs transition-all select-none",
        variants[variant || "primary"],
        sizes[size || "default"],
        className,
        disabled && "cursor-not-allowed opacity-65",
      )}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
// export const AnimationButton = ({
//   variant,
//   size,
//   className,
//   disabled,
//   type = "button",
//   children,
//   ...rest
// }: BtnProps & HTMLMotionProps<"button">) => {
//   return (
//     <MotionButton
//       whileTap={{ scale: 0.96, opacity: 0.8 }}
//       transition={{ duration: 0.1 }}
//       className={cn(
//         "cursor-pointer transition-all select-none",
//         variants[variant || "primary"],
//         sizes[size || "default"],
//         className,
//         disabled && "cursor-not-allowed opacity-75",
//       )}
//       disabled={disabled}
//       type={type}
//       {...rest}
//     >
//       {children}
//     </MotionButton>
//   );
// };
export const LinkButton = ({
  variant,
  size,
  className,
  children,
  href,
  ...rest
}: Omit<LinkProps, "href"> & {
  href: string | { path: string; query?: Record<string, string> };
}) => {
  return (
    <Link
      className={cn(
        "inline-block cursor-pointer text-center transition-all select-none",
        variants[variant || "primary"],
        sizes[size || "default"],
        className,
      )}
      href={href || ""}
      prefetch={false}
      {...rest}
    >
      {children}
    </Link>
  );
};
 
 