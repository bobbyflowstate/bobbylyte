import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobby Lyte — Book a DJ set",
  description:
    "Bobby Lyte — DJ and producer based in Sevilla. Versatile sets crafted for the floor — from opening warm-ups to peak-hour rooms. Booking worldwide.",
  openGraph: {
    title: "Bobby Lyte — Book a DJ set",
    description:
      "Versatile sets crafted for the floor — from opening warm-ups to peak-hour rooms.",
    images: ["/assets/logo-bobby-lyte-horizontal.svg"],
    type: "website",
  },
  icons: {
    icon: "/assets/mark-signal-ball-square.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
