import Link from "next/link";
import { Codesandbox } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex-grow mx-auto max-w-7xl w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link
            href="/"
            className="no-underline font-bold text-xl flex items-center gap-2"
          >
            <Codesandbox className="text-neutral-900" />
            <span className="text-neutral-900">Invento</span>
          </Link>
        </div>

        <nav className="hidden md:flex font-medium gap-10 text-sm text-neutral-500 ">
          <Link href="#features" className="hover:text-neutral-900">
            Features
          </Link>
          <Link href="#testimonials" className="hover:text-neutral-900">
            Testimonials
          </Link>
          <Link href="#about" className="hover:text-neutral-900">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Button className="rounded-lg px-3 py-2 hover:bg-neutral-100">
            <Link href="/login">
              <p className="text-neutral-900 text-sm">Sign in</p>
            </Link>
          </Button>

          <Button className="rounded-lg px-3 py-2 bg-neutral-900 hover:bg-neutral-800 ">
            <Link href="/signup">
              <p className="text-white text-sm">Get Started</p>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
