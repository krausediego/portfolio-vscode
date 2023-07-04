import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 via-purple-200 to-blue-200">
        <div className="w-[72%] h-[78%] bg-[#2E3440] border border-[#72707D] rounded-xl shadow-black/20">
          <Header />
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
