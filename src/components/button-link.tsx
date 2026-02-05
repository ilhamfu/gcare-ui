import type { AnchorHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  size: "lg" | "md" | "sm";
  variant: "primary" | "secondary" | "tertiary" | "outline" | "outline-danger" | "ghost" | "text";
  icon?: ReactNode,
} & AnchorHTMLAttributes<HTMLAnchorElement>

const variant_class = {
  "primary": "bg-tertiary-default border-tertiary-default text-white hover:bg-tertiary-hover hover:border-tertiary-hover active:bg-tertiary-active active:border-tertiary-active disabled:bg-grey-100 disabled:border-grey-100",
  "secondary": "bg-grey-100 border-grey-100 text-tertiary-default active:bg-grey-200",
  "tertiary": "bg-secondary-default border-secondary-default text-tertiary-default hover:bg-secondary-light-hover hover:border-secondary-light-hover active:bg-secondary-hover active:border-secondary-hover disabled:bg-grey-100 disabled:border-grey-100",
  "outline": "bg-white border-tertiary-default text-tertiary-default active:bg-tertiary-light-active disabled:border-grey-400",
  "outline-danger": "bg-white border-alert-negative text-alert-negative active:bg-alert-negative-light disabled:border-grey-400",
  "ghost": "bg-white border-white text-tertiary-default active:bg-tertiary-light-active active:border-tertiary-light-active",
  "text": "bg-white border-white text-tertiary-default hover:shadow-none hover:text-secondary-default active:text-tertiary-default",
}

const size_class = {
  "sm": "py-2 rounded-xl",
  "md": "py-3 rounded-2xl",
  "lg": "py-3 rounded-3xl",
}

const text_size_class = {
  "sm": "text-sm",
  "md": "text-base",
  "lg": "text-lg",
}
const icon_size_class = {
  "sm": "h-4 w-4",
  "md": "h-5 w-5",
  "lg": "h-6 w-6",
}

export default function Button({
  size,
  variant,
  className,
  children,
  icon,
  ...rest
}: ButtonProps = {
    size: "md",
    variant: 'primary',
  }) {
  return <a
    {...rest}
    className={
      twMerge(
        "flex justify-center items-center gap-x-2 px-4 group hover:shadow-lg hover:disabled:shadow-none active:shadow-none transition-all border",
        variant_class[variant],
        size_class[size]
      )
    }

  >
    {icon && <div className={twMerge("stroke-current fill-current group-disabled:stroke-grey-400 group-disabled:fill-stroke-grey-400", icon_size_class[size])}>{icon}</div>}
    <span className={
      twMerge("font-bold text-center text-inherit group-disabled:text-grey-400 empty:hidden",
        text_size_class[size])}
    >
      {children}
    </span>
  </a >
}
