"use client";

import { useState } from "react";
import LNavbar from "@/components/Navigation/LNavbar";
import LSidebar from "@/components/Navigation/LSidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <LNavbar onOpen={() => setOpen(true)} />
      <LSidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
