import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breno Pereira",
  description: "Welcome to my website :)",
};

const links = [
  { href: "/uses", text: "Uses" },
  { href: "mailto:breno.pereira.dev@gmail.com", text: "Email" },
  {
    href: "https://www.linkedin.com/in/breno3g/",
    text: "LinkedIn",
    external: true,
  },
  { href: "https://github.com/brcaua", text: "GitHub", external: true },
] as const;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-col sm:flex-row justify-between items-center p-8 lg:p-8 mx-4 sm:mx-16 shadow-sm">
          <Link
            href="/"
            className="text-2xl lg:text-3xl text-white-800 font-bold mb-4 sm:mb-0"
          >
            Breno Pereira
          </Link>

          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
            {links.map(({ href, text, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-lg lg:text-2xl font-normal text-white-900 dark:text-yellow-500 hover:font-bold transition-all"
              >
                {text}
              </Link>
            ))}
          </div>
        </nav>
        <main>{children}</main>

        <footer className="flex flex-col items-center justify-center w-full mt-4">
          <p className="text-xldark:text-yellow mb-6">
            Made with 💛 by Breno Pereira
          </p>
        </footer>
      </body>
    </html>
  );
}
