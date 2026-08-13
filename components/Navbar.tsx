"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Sets", href: "#sets" },
  { label: "Shows", href: "#shows" },
  { label: "Signal", href: "#signal" },
  { label: "Press", href: "#press" },
  { label: "Booking", href: "#booking" },
];

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);

      let current: string | null = null;
      for (const item of NAV_ITEMS) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 240) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isSolid ? "solid" : ""}`} id="nav">
      <a href="#top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/mark-signal-ball-square.svg" alt="Bobby Lyte" height={30} />
      </a>
      <div className="nav-links">
        <ul>
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isCurrent = activeId === id;
            return (
              <li key={item.href}>
                <a
                  className="lnk"
                  href={item.href}
                  aria-current={isCurrent ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a className="btn btn-ghost btn-sm" href="#booking">
          Book
        </a>
      </div>
    </nav>
  );
}
