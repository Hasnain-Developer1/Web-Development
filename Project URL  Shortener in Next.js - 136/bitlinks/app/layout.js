import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "BitLink Your trusted URL shortener",
  description: "bitlink help you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased bg-purple-50">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
