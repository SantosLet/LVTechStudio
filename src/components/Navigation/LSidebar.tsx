"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menu } from "./utils/menu";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [rendered, setRendered] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout>;
    let closeTimer: ReturnType<typeof setTimeout>;

    if (open) {
      setRendered(true);

      openTimer = setTimeout(() => {
        setActive(true);
      }, 10);
    } else {
      setActive(false);

      closeTimer = setTimeout(() => {
        setRendered(false);
      }, 300);
    }

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [open]);

  if (!rendered) return null;

  return (
    <>
      <div
        className={`lvtech-sidebar-overlay ${active ? "is-open" : ""}`}
        onClick={onClose}
      />

      <aside className={`lvtech-sidebar ${active ? "is-open" : ""}`}>
        <button type="button" onClick={onClose}>
          <Image
            src="/icons/menu_icon_black.svg"
            alt="Fechar menu lateral"
            width={0}
            height={0}
            className="h-7 w-auto"
          />
        </button>

        <ul>
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={onClose}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}