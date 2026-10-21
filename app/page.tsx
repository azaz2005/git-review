
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-foreground">
      <h1 className="mb-4 text-4xl font-bold">
        AI GitHub Code Reviewer
      </h1>

      <p className="mb-6 text-muted-foreground">
        Review your code and get AI-powered suggestions.
      </p>

      <Button>Start Code Review</Button>
    </main>
  );
}
