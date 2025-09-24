import { cn } from "@/lib/utils";
import React from "react";

export function HeroBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex h-[51rem] w-full bg-white overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#f9f9fb_1px,transparent_1px),linear-gradient(to_bottom,#f9f9fb_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#ececef_1px,transparent_1px),linear-gradient(to_bottom,#ececef_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
