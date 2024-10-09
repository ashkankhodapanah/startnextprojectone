import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ashkan barber",
  description: "ashkan barber start 2024",

  icons: {
    icon: "barber.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
