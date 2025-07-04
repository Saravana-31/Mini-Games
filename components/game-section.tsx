"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface GameSectionProps {
  title: string
  description: string
  icon: string
  level: string
  color: string
  hoverColor: string
}

export function GameSection({ title, description, icon, level, color, hoverColor }: GameSectionProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={`h-full bg-gradient-to-br ${color} ${hoverColor} text-white border-0 shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
      >
        <CardContent className="p-8 text-center relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
            <Button asChild variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Link href={`/game/${level}/level1`}>Start Playing</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
