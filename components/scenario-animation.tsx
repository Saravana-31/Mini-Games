"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Briefcase, AlertTriangle, Home, Car, Scale } from "lucide-react"
import { StickmanAnimation } from "./stickman-animation"

interface ScenarioAnimationProps {
  scenarioType:
    | "police-bribe"
    | "document-check"
    | "work-hours"
    | "domestic-violence"
    | "corruption"
    | "traffic-violation"
  scenario: string
}

const scenarioIcons = {
  "police-bribe": Shield,
  "document-check": Shield,
  "work-hours": Briefcase,
  "domestic-violence": Home,
  corruption: AlertTriangle,
  "traffic-violation": Car,
}

const scenarioColors = {
  "police-bribe": "from-blue-400 to-blue-600",
  "document-check": "from-blue-400 to-blue-600",
  "work-hours": "from-purple-400 to-purple-600",
  "domestic-violence": "from-red-400 to-red-600",
  corruption: "from-orange-400 to-orange-600",
  "traffic-violation": "from-green-400 to-green-600",
}

export function ScenarioAnimation({ scenarioType, scenario }: ScenarioAnimationProps) {
  const Icon = scenarioIcons[scenarioType]
  const colorClass = scenarioColors[scenarioType]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <Card className={`bg-gradient-to-r ${colorClass} text-white border-0 overflow-hidden`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Icon className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-bold">Legal Scenario</h3>
            </div>

            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Scale className="h-12 w-12 opacity-20" />
            </motion.div>
          </div>

          {/* Stickman Animation */}
          <StickmanAnimation scenarioType={scenarioType} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4"
          >
            <p className="text-sm opacity-90">Watch carefully and analyze the situation...</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
