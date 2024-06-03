import React from "react";
import Container from "../layout/container";
import Image from "next/image";
import fidelityLogo from "@/public/fidelity-logo.svg";
import { GeistMono } from "geist/font/mono";
import { Link } from "next-view-transitions";
import { routes } from "@/constants";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src={fidelityLogo}
            alt="Fidelity Logo"
            height={28}
            width={28}
          />
        </Link>
        <nav className="flex gap-6">
          {routes.map((route, idx) => {
            return (
              <Link key={idx} href={route.path} className={GeistMono.className}>
                {route.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/signin">Sign in</Link>
      </Container>
    </header>
  );
};

export default Navbar;
