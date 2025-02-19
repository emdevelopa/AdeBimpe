import { forwardRef } from "react"

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="container mx-auto max-w-3xl space-y-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">About Me</h2>
        <div className="space-y-4 text-sm md:text-base">
          <p>
            Hello! I'm [Your Name], a passionate writer specializing in screenwriting and copywriting. With [X] years of
            experience, I've honed my skills in crafting compelling narratives and persuasive content.
          </p>
          <p>
            My journey in writing began [brief background]. Since then, I've had the pleasure of working on various
            projects, from feature-length screenplays to marketing campaigns for notable brands.
          </p>
          <p>
            In screenwriting, I focus on [your specific areas, e.g., character-driven dramas, sci-fi adventures]. My
            goal is to create stories that resonate with audiences and leave a lasting impact.
          </p>
          <p>
            As a copywriter, I specialize in [your copywriting strengths, e.g., brand storytelling, SEO-optimized
            content]. I aim to craft messages that not only engage readers but also drive action.
          </p>
          <p>
            When I'm not writing, you can find me [your hobbies or interests]. I believe that these experiences enrich
            my writing and bring a unique perspective to my work.
          </p>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About

