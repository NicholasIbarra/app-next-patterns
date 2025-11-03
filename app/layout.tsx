import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Next.js + RTK Scaffold",
  description: "Starter project with Redux Toolkit and RTK Query"
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
