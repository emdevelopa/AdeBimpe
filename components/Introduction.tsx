import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to My Writing Portfolio</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        I'm a passionate writer crafting compelling stories and engaging content. Explore my work and let's bring your
        ideas to life.
      </p>
      <Button size="lg">Explore My Work</Button>
    </section>
  )
}

