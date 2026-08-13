"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | string>("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="footrow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/lockup-sol3cta-lyte.svg" alt="// SOL3CTA" height={26} />
        <ul>
          <li>
            <a href="https://instagram.com/bobbyflowstate" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/bobbyflowstate" target="_blank" rel="noopener noreferrer">
              SoundCloud
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@bobbyflowstate" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </div>
      <div className="footmeta">
        <a href="mailto:booking@bobbyflowstate.com">booking@bobbyflowstate.com</a>
        <span>Bobby Lyte // SOL3CTA · © <span id="year">{year}</span></span>
      </div>
    </footer>
  );
}
