import Link from "next/link";
import { ChevronRight, Codesandbox } from "lucide-react";

const Header = () => {
  return (
    <header className=" sticky top-0 bg-white/95 z-50">
      <div className="flex-grow mx-auto max-w-7xl w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link
            href="/"
            className="no-underline font-bold text-xl flex items-center gap-2"
          >
            <Codesandbox className="text-indigo-500" />
            <span className="text-indigo-500">Invento</span>
          </Link>

          <nav className="hidden md:flex font-medium gap-5 text-sm text-gray-500 ">
            <Link href="#features" className="hover:text-gray-900">
              Features
            </Link>
            <Link href="#testimonials" className="hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#about" className="hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="hidden md:flex items-center gap-1 text-[#18181b] rounded-full px-3 py-2 font-semibold text-sm hover:bg-gray-100 "
          >
            <span>Sign in</span>
            <ChevronRight className="text-black w-4 h-4" />
          </Link>

          <Link
            href="/signup"
            className="drop-shadow-xs bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 px-3 py-2 rounded-full text-sm font-semibold hover:opacity-90 flex items-center gap-1 transition"
          >
            <span className="text-white">Get Started</span>
            <ChevronRight className="text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
