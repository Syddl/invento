"use client";
import type React from "react";
import Link from "next/link";
import { CustomSidebar } from "@/components/SideBar";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen gap-5  bg-gradient-to-b from-neutral-50 to-neutral-100">
      <CustomSidebar />
      <main className="w-full overflow-auto">{children}</main>
    </div>
  );
}

export default ProtectedLayout;
