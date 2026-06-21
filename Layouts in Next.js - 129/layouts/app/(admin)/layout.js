import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin: Facebook",
    description: "Admin: Page Facebook is a social media platform that allows you to connect with friends and family, share photos and videos, and stay updated on news and events.",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <span>Admin Navbar</span>
            {children}
        </>

    );
}
