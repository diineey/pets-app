import { Noto_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Питомцы",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
