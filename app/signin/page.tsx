import Container from "@/components/layout/container";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Fidelity",
};

const SignInPage = () => {
  return (
    <main className="bg-pri-black">
      <Container className="min-h-svh flex flex-col justify-center">
        <h1 className="text-h1 leading-none tracking-tighter font-semibold">
          Fidelity te amo
        </h1>
      </Container>
    </main>
  );
};

export default SignInPage;
