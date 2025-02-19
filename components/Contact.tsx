import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourusername",
    icon: Linkedin,
    color: "text-blue-700",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
    color: "text-gray-600",
  },
]

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto max-w-2xl space-y-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Connect With Me</h2>
        <p className="text-center text-sm md:text-base">
          Feel free to reach out for collaborations or just to say hello!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={`${link.color} hover:bg-secondary-foreground hover:text-secondary transition-colors`}
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <link.icon className="w-5 h-5" />
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"

export default Contact

