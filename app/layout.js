import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { auth } from "@/app/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blogs app home",
    template: "%s | Blogs app",
  },
  description: "Blogs app home with next app",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  console.log("[session] ->", session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Navbar session={session} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
