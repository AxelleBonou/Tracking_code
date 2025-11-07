"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false); // dropdown menu PC

  return (
    <header className="bg-[#1E2A32] border-b border-[#2C3A45] w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16 flex justify-between items-center h-16">
        {/* Logo WU */}
        <div className="text-yellow-400 font-bold text-xl select-none">
          WU
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center text-white text-sm font-light relative">
          <a href="#" className="hover:text-yellow-400 hover:underline transition">
            Send money
          </a>
          <a href="#" className="hover:text-yellow-400 hover:underline transition">
            Track transfer
          </a>
          <a href="#" className="hover:text-yellow-400 hover:underline transition">
            Find locations
          </a>

          {/* First hamburger menu on desktop */}
          <button
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            className="ml-2 border-l border-gray-700 pl-4 text-white hover:text-yellow-400 transition"
          >
            {desktopMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>

          {/* Dropdown of first menu (desktop) */}
          {desktopMenuOpen && (
            <div className="absolute right-0 top-[100%] bg-[#1E2A32] border border-[#2C3A45] shadow-lg w-48 z-50 mt-2">
              <div className="flex flex-col text-sm text-yellow-400">
                <button className="px-4 py-2 hover:bg-[#25313B] text-left">
                  Update delivery method
                </button>
                <button className="px-4 py-2 hover:bg-[#25313B] text-left">
                  Help
                </button>
              </div>
            </div>
          )}

          {/* Desktop log in/register */}
          <button className="ml-4 border border-gray-400 px-3 py-1 rounded text-sm text-white hover:bg-white hover:text-black transition">
            Log in
          </button>
          <button className="text-yellow-400 text-sm hover:underline transition">
            Register
          </button>
        </nav>

        {/* Second hamburger menu for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E2A32] border-t border-[#2C3A45] w-full shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 text-white text-sm">
            <a href="#" className="hover:text-yellow-400">
              Send money
            </a>
            <a href="#" className="hover:text-yellow-400">
              Track transfer
            </a>
            <a href="#" className="hover:text-yellow-400">
              Find locations
            </a>
            <button className="text-yellow-400 hover:text-yellow-300 text-left">
              Update delivery method
            </button>
            <button className="text-yellow-400 hover:text-yellow-300 text-left">
              Help
            </button>
            <div className="border-t border-gray-700"></div>
            <button className="text-white hover:text-yellow-400 text-left">
              Log in
            </button>
            <button className="text-yellow-400 hover:text-yellow-300 text-left">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
