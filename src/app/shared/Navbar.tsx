"use client"
import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png"
import Image from "next/image";

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    const authButtons = <>
        <Button onClick={() => router.push("/login")} className="w-full lg:bg-neutral-50 text-slate-600 text-lg rounded-sm bg-red-100">সাইন ইন</Button>
        <Button onClick={() => router.push("/signup")} className="w-full bg-red-700 text-lg rounded-sm">সাইন আপ</Button>
    </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator  backdrop-blur-lg">
            <header className="relative mx-auto grid h-25 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
                <div className="col-start-2 row-start-1 flex items-center gap-4">
                    <button
                        className="absolute left-6 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <Image src={logo} width={70} height={70} alt="logo"></Image>
                            <div>
                                <Link href="/" className="font-bold text-red-700">ibonDeV News 24</Link>
                                <h2 className="text-sm font-light">{date}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 row-start-1 hidden items-center justify-self-end gap-4 md:flex">
                    {authButtons}
                </div>
            </header>
            {isMenuOpen && (
                <div className=" md:hidden">
                    <ul className="flex flex-col gap-2 px-5">
                        <li className="mt-4 flex flex-col gap-2">
                            {authButtons}
                        </li>
                    </ul>
                </div>
            )}
            <div className="">
                {children}
            </div>
        </nav>
    );
}
export default Navbar
