"use client";

import React from "react";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="h-fit w-full">
      <nav
        className={cn(
          "z-50",
          "flex h-[3.5rem] px-4",
          "w-full items-center border-b bg-accent/20"
        )}
      >
        <div className="hidden select-none text-xl font-extrabold uppercase md:block">
          Downloader
        </div>
        <MobileNav className="md:hidden" />
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
      <div className="flex items-center justify-between border-t border-input px-4 py-2">
        

        <div aria-label="Disclaimer" className="text-sm font-semibold">
          © Copyright 2025, All Rights Reserved | designed by Kundan K

        </div>
        
      </div>
    </footer>
  );
}
