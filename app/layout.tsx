
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { ActiveSectionContextProvider } from "@/contexts/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Shihabul Islam | Frontend Developer",
  description:
    "Md Shihabul Islam is a frontend developer based in Rajshahi, Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* <head>
        <title>Md Shihabul Islam | Frontend Developer</title>
        <meta
          name="description"
          content="Md Shihabul Islam is a frontend developer based in Rajshahi, Bangladesh."
        />
      </head> */}
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] "></div>
        <div className="bg-[#bdb7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
