"use client";
import React from "react";
import Container from "../layout/container";
import Image from "next/image";
import fidelityLogo from "@/public/fidelity-logo.svg";
import { GeistMono } from "geist/font/mono";
import { Link } from "next-view-transitions";
import { routes } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="py-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src={fidelityLogo}
              alt="Fidelity Logo"
              height={28}
              width={28}
            />
          </Link>
          <nav className="flex gap-4">
            {routes.map((route, idx) => {
              return (
                <Link
                  key={idx}
                  href={route.path}
                  className={`${GeistMono.className} ${pathname === route.path ? "bg-[#353538] rounded-xl" : ""} py-1.5  px-2`}
                >
                  {route.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex gap-6">
          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Create Account</Link>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
