import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "The Art of Storytelling",
    description: "An in-depth exploration of narrative techniques in modern literature.",
    category: "Essay",
    link: "#",
  },
  {
    title: "Tech Innovations 2023",
    description: "A comprehensive report on the latest technological advancements.",
    category: "Article",
    link: "#",
  },
  {
    title: "Sustainable Living",
    description: "A guide to adopting eco-friendly practices in everyday life.",
    category: "Blog Post",
    link: "#",
  },
  // Add more projects as needed
]

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">My Writing Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={project.link}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

