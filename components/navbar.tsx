"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">LawLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/game/basic/level1" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Games
            </Link>
            <Link href="/feedback" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Feedback
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">
                <User className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-600 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/game/basic/level1"
                  className="block text-gray-600 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Games
                </Link>
                <Link
                  href="/feedback"
                  className="block text-gray-600 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Feedback
                </Link>
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                      <User className="mr-2 h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
