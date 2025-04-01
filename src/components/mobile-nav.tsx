"use client";

import React from "react";
import Link from "next/link";
import { externalLinks } from "@/lib/constants";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  const handleCloseSheet = () => setOpen(false);

  return (
        
          {externalLinks.map((link) =>  (              
                  {link.name}        
          ))}
     
  );
}
