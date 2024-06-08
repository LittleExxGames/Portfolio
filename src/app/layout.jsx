//"use client";
import "./layout.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";
//import { BrowserRouter as Router } from "react-router-dom";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const links = [
  {
    title: "Home",
    url: "/home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="layout-container">
        <div>
          <Navbar links={links} />
          </div>
          <div>
          <ThemeSwitcher />
          </div>
        </div>
        <main>{children}</main>
        <Footer links={links} />
      </body>
    </html>
  );
}
