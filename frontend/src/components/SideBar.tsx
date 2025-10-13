"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  CreditCard,
  Truck,
  BarChart3,
  Codesandbox,
  ChevronLeft,
  ChevronRight,
  User,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Products",
    icon: Package,
    href: "/products",
  },
  {
    title: "Transactions",
    icon: CreditCard,
    href: "/transaction",
  },
  {
    title: "Suppliers",
    icon: Truck,
    href: "/suppliers",
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/reports",
  },
];

export function CustomSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className={`relative flex flex-col bg-white border-r rounded-xl border-gray-200 shadow-sm  transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-70"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-300 ">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
          <Codesandbox className="w-7 h-7 text-neutral-900" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Invento</span>
            <span className="text-xs text-neutral-500">
              Inventory Management
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`flex items-center ${
                    isCollapsed ? "justify-center" : "justify-start"
                  } gap-3 px-3 py-2 rounded-lg transition-colors group relative ${
                    isActive
                      ? "bg-neutral-700 text-white"
                      : "text-neutral-500 hover:bg-accent hover:text-accent-foreground"
                  }`}
                  title={isCollapsed ? item.title : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.title}</span>
                  )}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.title}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-300">
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            title={isCollapsed ? "Admin User" : undefined}
          >
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium">N</span>
            </div>
            {!isCollapsed && (
              <>
                <div className="flex flex-col text-left flex-1">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">
                    admin@invento.com
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showUserMenu ? "rotate-180" : ""
                  }`}
                />
              </>
            )}
          </button>

          {/* User Menu Dropdown */}
          {showUserMenu && !isCollapsed && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-popover border rounded-lg shadow-lg py-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                <User className="w-4 h-4" />
                Account
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <hr className="my-1" />
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground text-destructive"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-neutral-700 cursor-pointer shadow-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-accent transition-colors text-white"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>
    </div>
  );
}
