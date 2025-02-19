"use client"

import type React from "react"

import { useRef } from "react"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Portfolio from "@/components/Portfolio"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function Home() {
  const portfolioRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen pt-16">
      <Header
        onPortfolioClick={() => scrollTo(portfolioRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <main>
        <Introduction />
        <Portfolio ref={portfolioRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  )
}

