"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  onPortfolioClick: () => void
  onAboutClick: () => void
  onContactClick: () => void
}

export default function Header({ onPortfolioClick, onAboutClick, onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <span className="text-xl md:text-2xl font-bold">Adebimpe</span>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu />
        </Button>
        <ul
          className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? "absolute top-full left-0 right-0 bg-background p-4 md:p-0 md:relative" : "hidden md:flex"}`}
        >
          <li>
            <Button
              variant="ghost"
              onClick={() => {
                onPortfolioClick()
                toggleMenu()
              }}
            >
              Portfolio
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => {
                onAboutClick()
                toggleMenu()
              }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => {
                onContactClick()
                toggleMenu()
              }}
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

