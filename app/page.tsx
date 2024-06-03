import Container from "@/components/layout/container";

export default function Home() {
  return (
    <main className="bg-pri-black">
      <Container className="min-h-svh flex flex-col justify-center">
      <h1 className="text-h1 leading-none tracking-tighter font-semibold">Fidelity</h1>
      <img src="/images/og-img.jpg"/>
      </Container>
    </main>
  );
}
