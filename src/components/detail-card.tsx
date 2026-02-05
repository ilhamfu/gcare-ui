import clsx from "clsx"
import type { ReactNode } from "react"

const detail_card_size_class = {
  lg: { label: "text-base", detail: "text-lg" },
  md: { label: "text-sm", detail: "text-base" },
  sm: { label: "text-sm", detail: "text-xs" },
  xs: { label: "text-2xs", detail: "text-2xs" },
  xxs: { label: "text-3xs", detail: "text-3xs" },
}

type DetailCardProps = {
  size: keyof typeof detail_card_size_class,
  label: String,
  children?: ReactNode;
}

export default function DetailCard({ size, label, children }: DetailCardProps = {
  size: "md",
  label: "",

}) {
  return <div className="flex flex-col">
    <span className={detail_card_size_class[size]["label"]}>{label}</span>
    <div className="flex-1 items-center flex">
      <span className={clsx("font-semibold", detail_card_size_class[size]["detail"])}>{children}</span></div>
  </div>

}
