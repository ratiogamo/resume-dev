"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BeamsBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number
}

export function BeamsBackground({
  className,
  intensity = 1,
  ...props
}: BeamsBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]",
        className
      )}
      style={{
        opacity: intensity,
      }}
      {...props}
    />
  )
}