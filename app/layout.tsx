import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobby Lyte — Book a DJ set",
  description:
    "Bobby Lyte — DJ and producer based in Sevilla. Day sets that open a room, night sets that hold it, and a live set of all original music. Booking worldwide.",
  openGraph: {
    title: "Bobby Lyte — Book a DJ set",
    description:
      "Day sets that open a room, night sets that hold it, and a live set of all original music.",
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
