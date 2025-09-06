import Link from "next/link";

const Header = () => {
  return (
    <header className=" sticky top-0 bg-white/95 z-50">
      <div className="flex-grow mx-auto max-w-7xl w-full px-6 py-4 flex justify-between items-center">
        <Link href="#hero" className="no-underline font-bold text-xl">
          StaffTrackr
        </Link>
        <nav className="hidden md:flex font-semibold gap-3 text-sm text-gray-500 ">
          <Link href="#features" className="hover:text-gray-900">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-gray-900">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="hidden md:block text-[#18181b] rounded-sm px-3 py-2 font-semibold text-sm hover:bg-gray-100"
          >
            Sign in
          </Link>
          <Link
            href="/demo"
            className="text-gray-100 drop-shadow-xs bg-[#18181b] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-[#2f2f31]"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
