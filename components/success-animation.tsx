"use client"

import { motion } from "framer-motion"

interface SuccessAnimationProps {
  scenarioType:
    | "police-bribe"
    | "document-check"
    | "work-hours"
    | "domestic-violence"
    | "corruption"
    | "traffic-violation"
}

export function SuccessAnimation({ scenarioType }: SuccessAnimationProps) {
  const renderSuccessScene = () => {
    switch (scenarioType) {
      case "traffic-violation":
        return (
          <div className="relative h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
            {/* Road */}
            <div className="absolute bottom-0 w-full h-4 bg-gray-600">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2"></div>
            </div>

            {/* Citizen with helmet */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 100 }}
              transition={{ duration: 3, ease: "linear" }}
              className="absolute bottom-4"
            >
              <div className="relative">
                {/* Bike */}
                <div className="w-8 h-1 bg-gray-800 mb-1"></div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 border-2 border-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-gray-800 rounded-full"></div>
                </div>

                {/* Stickman with helmet */}
                <div className="relative -ml-2 mb-2">
                  {/* Head with helmet */}
                  <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
                    <div className="absolute -top-0.5 left-0 w-3 h-2 bg-red-500 rounded-t border border-black"></div>
                  </div>
                  {/* Body */}
                  <div className="w-0.5 h-4 bg-black mx-auto"></div>
                  {/* Arms */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-0.5 bg-black rotate-45"></div>
                    <div className="w-3 h-0.5 bg-black -rotate-45 -mt-0.5"></div>
                  </div>
                  {/* Legs */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-0.5 bg-black rotate-12"></div>
                    <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Police officer giving thumbs up */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-4 right-8"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
                  <div className="absolute -top-1 left-0 w-4 h-1 bg-blue-600 rounded-t"></div>
                </div>
                <div className="w-0.5 h-4 bg-blue-600 mx-auto"></div>
                {/* Thumbs up */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-2 h-3 bg-black rounded-t"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Success message */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">SAFE RIDING! ✓</div>
            </motion.div>
          </div>
        )

      case "corruption":
        return (
          <div className="relative h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
            {/* Anti-corruption bureau */}
            <div className="absolute bottom-0 w-full h-6 bg-green-700"></div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-green-800 rounded-t">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xs">ACB</div>
            </div>

            {/* Citizen reporting */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 40 }}
              transition={{ duration: 2 }}
              className="absolute bottom-6 left-8"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80"></div>
                <div className="w-0.5 h-4 bg-black mx-auto"></div>
                {/* Holding complaint */}
                <div className="absolute top-1 -right-2 w-2 h-3 bg-white border border-black rounded"></div>
              </div>
            </motion.div>

            {/* ACB officer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 right-8"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
                  <div className="absolute -top-1 left-0 w-4 h-1 bg-green-600 rounded-t"></div>
                </div>
                <div className="w-0.5 h-4 bg-green-600 mx-auto"></div>
                {/* Taking notes */}
                <div className="absolute top-1 -right-2 w-2 h-3 bg-white border border-black rounded"></div>
              </div>
            </motion.div>

            {/* Arrest warrant */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">
                CORRUPT OFFICIAL ARRESTED!
              </div>
            </motion.div>

            {/* Reward */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-2 right-2"
            >
              <div className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">₹1 LAKH REWARD</div>
            </motion.div>
          </div>
        )

      default:
        return (
          <div className="relative h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
            </motion.div>
          </div>
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      {renderSuccessScene()}
    </motion.div>
  )
}
