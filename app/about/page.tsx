import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Profile picture"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="space-y-4">
          <p>
            Hello! I'm [Your Name], a passionate writer with [X] years of experience in [your specialties, e.g., content
            marketing, creative writing, technical writing].
          </p>
          <p>
            My journey in writing began [brief background]. Since then, I've had the pleasure of working with [mention
            notable clients or publications if applicable].
          </p>
          <p>
            I specialize in [list your key areas of expertise]. My goal is to [your mission or what you aim to achieve
            with your writing].
          </p>
          <p>
            When I'm not writing, you can find me [your hobbies or interests]. I believe that these experiences enrich
            my writing and bring a unique perspective to my work.
          </p>
        </div>
      </div>
    </div>
  )
}

