import { Codesandbox } from "lucide-react";
import { LoginForm } from "./components/LoginForm";
import { TestimonialCard } from "@/features/landing/components/TestimonialsSection";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-gray-50">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Codesandbox className="text-indigo-500 h-8 w-8" />
            <span className="text-indigo-500 text-xl font-bold">Invento</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex items-center px-20 bg-gradient-to-r from-indigo-400 to-purple-400">
        <TestimonialCard />
      </div>
    </div>
  );
}
