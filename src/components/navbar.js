"use client"

import Link from "next/link";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
// import { Signup } from '/src/app/Signup/page.js';

const links = [
    {
        id: 1,
        title: "Toolbeng Ride",
        url: "/Ride",
    },
    {
        id: 2,
        title: "Toolbeng Car",
        url: "/Car",
    },
    {
        id: 3,
        title: "Toolbeng Service",
        url: "/Service",
    },
    {
        id: 4,
        title: "Toolbeng Shop",
        url: "/Shop",
    },
]

const accounts = [
    {
        id: 1,
        title: "Create Account",
        url: "/Signup",
    }
]

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="bg-slate-gray p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="logo.png" alt="logo" className="h-9 w-9 mr-2" />
                    <a href="/" className={me.className + " text-sSize"}>
                        ToolBeng
                    </a>
                </div>
                {isMobile ? (
                    <button
                        onClick={toggleMobileMenu}
                        className="text-sSize"
                    >
                        Menu
                    </button>
                ) : (
                    <h2 className="text-sSize flex space-x-4">
                        {links.map(link => (
                            <Link
                                className={lun.className + " hover:text-gray-300"}
                                key={link.id}
                                href={link.url}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </h2>
                )} 

                {/* <div>
                    <a href="signup.js"
                        className={`text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded hover:bg-blue-700 ${lun.className}`}
                    >
                        Create Account
                    </a>
                </div> */}
                <div>
                    {accounts.map(account => (
                        <Link
                            class={`text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded hover:bg-blue-700 ${lun.className}`}
                            key={account.id}
                            href={account.url}>
                                {account.title}
                        </Link>
                    ))}
                </div>
            </div>

            {isMobile && mobileMenuOpen && (
                <div className="mobile-menu">
                    {links.map(link => (
                        <Link
                            className="block text-sSize mb-2"
                            key={link.id}
                            href={link.url}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
