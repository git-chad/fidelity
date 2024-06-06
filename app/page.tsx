import Container from "@/components/layout/container";
import Grid from "@/components/grid/grid";
export default function Home() {
  return (
    <main className="bg-pri-black">
      <Container className="min-h-svh flex flex-col justify-center py-32">
      <Grid />
      </Container>
    </main>
  );
}
