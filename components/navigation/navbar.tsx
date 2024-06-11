"use client";
import React from "react";
import Container from "../layout/container";
import Image from "next/image";
import fidelityLogo from "@/public/fidelity-logo.svg";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { routes } from "@/constants";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
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
                  className={`relative ${GeistMono.className} py-1.5  px-2`}
                >
                  {pathname === route.path && (
                    <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-[#353538] rounded-xl mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  )}
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
