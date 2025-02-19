import { forwardRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const screenwritingProjects = [
  {
    title: "The Forgotten Kingdom",
    description: "An epic tale of love, war, and cultural clash set in an unknown kingdom.",
    category: "Feature Film - Epic",
    details: `A group of western soldiers, led by the ruthless Karl, venture into an unknown kingdom in search of valuables. The kingdom, ruled by a council of brilliant minds, lives in peace and prosperity. Karl's determination wavers when he meets Adamma, a beautiful healer from the kingdom, who is loved by Ekene, the kingdom's warrior leader. As Karl and Adamma grow closer, the soldiers' presence disrupts the kingdom's balance, unleashing buried secrets and triggering a chain of events that threaten the kingdom's existence. With war looming, Karl and Adamma face dangerous challenges to save the land, their love becoming the kingdom's only hope. This powerful epic explores identity, civilization clash, and the interplay between modernization and tradition, questioning whether love and tolerance can overcome conflict.`,
  },
  // Add more screenwriting projects as needed
]

const copywritingProjects = [
  {
    title: "TechNova Product Launch",
    description: "A comprehensive marketing campaign for a cutting-edge smartphone.",
    category: "Marketing Campaign",
    details: `Developed a multi-channel marketing strategy for TechNova's latest smartphone release. The campaign included social media content, email marketing, blog posts, and press releases. The focus was on highlighting the phone's innovative features and its impact on daily life.`,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "EcoLife Blog Series",
    description: "A series of SEO-optimized blog posts promoting sustainable living.",
    category: "Content Marketing",
    details: `Created a 12-part blog series for EcoLife, a sustainable living brand. Each post focused on practical tips for adopting eco-friendly practices in everyday life. Topics ranged from reducing plastic waste to energy-efficient home improvements. The series significantly increased organic traffic and user engagement.`,
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more copywriting projects as needed
]

const ProjectList = ({ projects, showImage = false }) => (
  <div className="grid grid-cols-1 gap-6">
    {projects.map((project, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>{project.category}</CardDescription>
        </CardHeader>
        <CardContent>
          {showImage && project.image && (
            <div className="mb-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-md object-cover w-full"
              />
            </div>
          )}
          <p className="text-sm md:text-base">{project.description}</p>
          {project.details && (
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-primary">Read more</summary>
              <p className="mt-2 text-sm">{project.details}</p>
            </details>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
)

const Portfolio = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto space-y-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">My Portfolio</h2>
        <Tabs defaultValue="screenwriting" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="screenwriting">Screenwriting</TabsTrigger>
            <TabsTrigger value="copywriting">Copywriting</TabsTrigger>
          </TabsList>
          <TabsContent value="screenwriting">
            <ProjectList projects={screenwritingProjects} />
          </TabsContent>
          <TabsContent value="copywriting">
            <ProjectList projects={copywritingProjects} showImage={true} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
})

Portfolio.displayName = "Portfolio"

export default Portfolio

