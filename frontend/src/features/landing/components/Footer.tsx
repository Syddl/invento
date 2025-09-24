"use client";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-neutral-900">
                Invento
              </span>
            </div>
            <p className="text-neutral-500 mb-4 max-w-md ">
              Precision inventory management for small businesses. Take control
              with real-time tracking, automated alerts, and actionable
              insights.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-neutral-900 mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-neutral-500">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Support</h3>
            <ul className="space-y-2 text-neutral-500">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-8 pt-8 text-center text-neutral-500">
          <p>&copy; 2025 Invento. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
