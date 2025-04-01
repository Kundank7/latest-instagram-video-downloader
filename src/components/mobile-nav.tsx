"use client";

import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { externalLinks } from "@/lib/constants";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  const handleCloseSheet = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={className}>
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        
        <ul className="space-y-3">
          {externalLinks.map((link) => (
            <li key={link.href}>
              <Button variant="outline" asChild>
                <Link
                  href={link.href}
                  className="w-full"
                  target="_blank"
                  onClick={handleCloseSheet}
                >
                  {link.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
                }
