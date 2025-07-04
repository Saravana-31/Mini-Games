"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, AlertTriangle, Gavel, DollarSign, Clock } from "lucide-react"

interface PunishmentAnimationProps {
  isOpen: boolean
  onClose: () => void
  punishment: {
    title: string
    description: string
    legalConsequence: string
    fine?: string
    imprisonment?: string
    additionalInfo?: string
  }
  scenarioType:
    | "police-bribe"
    | "document-check"
    | "work-hours"
    | "domestic-violence"
    | "corruption"
    | "traffic-violation"
}

export function PunishmentAnimation({ isOpen, onClose, punishment, scenarioType }: PunishmentAnimationProps) {
  const getPunishmentAnimation = () => {
    switch (scenarioType) {
      case "corruption":
        return (
          <div className="relative h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg overflow-hidden">
            {/* Court scene background */}
            <div className="absolute bottom-0 w-full h-8 bg-brown-600"></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-brown-800 rounded-t">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-white">COURT</div>
            </div>

            {/* Judge */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-4 h-4 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute -top-1 left-0 w-5 h-2 bg-black rounded-t"></div>
                </div>
                <div className="w-0.5 h-5 bg-black mx-auto"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-4 h-0.5 bg-black"
                    animate={{ rotate: [0, -45, 0] }}
                    transition={{ duration: 1, repeat: 3 }}
                  />
                </div>
              </div>
              {/* Gavel */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: 5 }}
                className="absolute -right-6 top-2 w-3 h-1 bg-brown-600 rounded"
              />
            </div>

            {/* Corrupt official (defendant) */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 20 }}
              transition={{ duration: 2 }}
              className="absolute bottom-8 left-8"
            >
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 0.95, 1],
                }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="relative"
              >
                {/* Head (worried) */}
                <div className="w-3 h-3 border-2 border-black rounded-full bg-yellow-200 relative">
                  <div className="absolute top-1 left-0.5 w-0.5 h-1 bg-blue-600"></div>
                  <div className="absolute top-1 right-0.5 w-0.5 h-1 bg-blue-600"></div>
                </div>
                {/* Body */}
                <div className="w-0.5 h-4 bg-orange-600 mx-auto"></div>
                {/* Handcuffs */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-1 bg-gray-600 rounded"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* CBI officer */}
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 120 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-8 right-8"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute -top-1 left-0 w-4 h-1 bg-blue-800 rounded-t"></div>
                  <div className="absolute top-0 left-1 text-xs text-white font-bold">CBI</div>
                </div>
                <div className="w-0.5 h-4 bg-blue-800 mx-auto"></div>
              </div>
            </motion.div>

            {/* Verdict animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm">GUILTY! 7 YEARS PRISON</div>
            </motion.div>

            {/* Money confiscated */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -20, opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 left-12"
            >
              <div className="w-6 h-4 bg-green-500 rounded text-xs flex items-center justify-center text-white">
                ₹₹₹
              </div>
            </motion.div>
          </div>
        )

      case "work-hours":
        return (
          <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg overflow-hidden">
            {/* Factory closure scene */}
            <div className="absolute bottom-0 w-full h-12 bg-gray-700"></div>
            <div className="absolute bottom-12 left-4 w-32 h-20 bg-gray-800 rounded-t relative">
              <div className="absolute top-2 left-2 text-white text-xs">FACTORY</div>
              {/* Closure notice */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-red-600 rounded flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">CLOSED</span>
              </motion.div>
            </div>

            {/* Labour inspector */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 50 }}
              transition={{ duration: 2 }}
              className="absolute bottom-12 left-8"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute -top-1 left-0 w-4 h-1 bg-green-600 rounded-t"></div>
                </div>
                <div className="w-0.5 h-4 bg-green-600 mx-auto"></div>
                {/* Clipboard */}
                <div className="absolute top-1 -right-2 w-2 h-3 bg-white border border-black rounded"></div>
              </div>
            </motion.div>

            {/* Employer (being arrested) */}
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 120 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-12 right-8"
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                  y: [0, -2, 0],
                }}
                transition={{ duration: 0.5, repeat: 4 }}
                className="relative"
              >
                {/* Head (distressed) */}
                <div className="w-3 h-3 border-2 border-black rounded-full bg-red-200 relative">
                  <div className="absolute top-0.5 left-0.5 w-1 h-0.5 bg-red-600 rotate-45"></div>
                  <div className="absolute top-0.5 right-0.5 w-1 h-0.5 bg-red-600 -rotate-45"></div>
                </div>
                {/* Body */}
                <div className="w-0.5 h-4 bg-gray-800 mx-auto"></div>
                {/* Handcuffs */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-1 bg-gray-600 rounded"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Fine notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm">
                ₹10,00,000 FINE + 3 YEARS JAIL
              </div>
            </motion.div>

            {/* Workers celebrating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-2 right-2"
            >
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: 3, delay: i * 0.1 }}
                    className="w-2 h-3 bg-green-500 rounded-t"
                  />
                ))}
              </div>
              <div className="text-xs text-green-600 font-bold">JUSTICE!</div>
            </motion.div>
          </div>
        )

      case "domestic-violence":
        return (
          <div className="relative h-48 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg overflow-hidden">
            {/* Police station */}
            <div className="absolute bottom-0 w-full h-10 bg-blue-800"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-blue-900 rounded-t">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xs">POLICE</div>
            </div>

            {/* Abuser being arrested */}
            <motion.div
              initial={{ x: 200, y: 0 }}
              animate={{ x: 80, y: 0 }}
              transition={{ duration: 2 }}
              className="absolute bottom-10 right-8"
            >
              <motion.div
                animate={{
                  rotate: [0, -15, 15, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{ duration: 0.3, repeat: 8 }}
                className="relative"
              >
                {/* Head (angry/scared) */}
                <div className="w-3 h-3 border-2 border-black rounded-full bg-red-300 relative">
                  <div className="absolute top-0.5 left-0.5 w-1 h-0.5 bg-red-700 rotate-12"></div>
                  <div className="absolute top-0.5 right-0.5 w-1 h-0.5 bg-red-700 -rotate-12"></div>
                </div>
                {/* Body */}
                <div className="w-0.5 h-4 bg-red-600 mx-auto"></div>
                {/* Handcuffs */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-1 bg-gray-600 rounded"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Police officers */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 20 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-10 left-8"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute -top-1 left-0 w-4 h-1 bg-blue-600 rounded-t"></div>
                </div>
                <div className="w-0.5 h-4 bg-blue-600 mx-auto"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30 }}
              animate={{ x: 40 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute bottom-10 left-16"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute -top-1 left-0 w-4 h-1 bg-blue-600 rounded-t"></div>
                </div>
                <div className="w-0.5 h-4 bg-blue-600 mx-auto"></div>
              </div>
            </motion.div>

            {/* Victim (safe) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-26 right-16"
            >
              <div className="relative">
                <div className="w-3 h-3 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute top-1 left-0.5 w-0.5 h-0.5 bg-green-600"></div>
                  <div className="absolute top-1 right-0.5 w-0.5 h-0.5 bg-green-600"></div>
                  <div className="absolute top-1.5 left-0.5 w-2 h-0.5 bg-green-600 rounded-full"></div>
                </div>
                <div className="w-0.5 h-4 bg-green-600 mx-auto"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-green-600 font-bold">
                SAFE
              </div>
            </motion.div>

            {/* Court order */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-green-600 text-white px-4 py-2 rounded font-bold text-sm">PROTECTION ORDER ISSUED</div>
            </motion.div>

            {/* Sentence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="absolute top-12 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-red-600 text-white px-3 py-1 rounded text-sm">3 YEARS PRISON + ₹2,00,000 FINE</div>
            </motion.div>
          </div>
        )

      case "traffic-violation":
        return (
          <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
            {/* Police station disciplinary scene */}
            <div className="absolute bottom-0 w-full h-8 bg-blue-800"></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-blue-900 rounded-t">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xs">POLICE HQ</div>
            </div>

            {/* Senior officer */}
            <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-4 h-4 border-2 border-black rounded-full bg-white relative">
                  <div className="absolute -top-1 left-0 w-5 h-2 bg-blue-800 rounded-t"></div>
                  <div className="absolute top-0 left-1 text-xs text-white">★</div>
                </div>
                <div className="w-0.5 h-5 bg-blue-800 mx-auto"></div>
                {/* Pointing finger */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-4 h-0.5 bg-black"
                    animate={{ rotate: [0, -45, 0] }}
                    transition={{ duration: 1, repeat: 3 }}
                  />
                </div>
              </div>
            </div>

            {/* Corrupt traffic officer (being disciplined) */}
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 100 }}
              transition={{ duration: 2 }}
              className="absolute bottom-8 right-8"
            >
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  y: [0, -1, 0],
                }}
                transition={{ duration: 0.5, repeat: 6 }}
                className="relative"
              >
                {/* Head (ashamed) */}
                <div className="w-3 h-3 border-2 border-black rounded-full bg-yellow-200 relative">
                  <div className="absolute top-1 left-0.5 w-0.5 h-1 bg-blue-600 rotate-12"></div>
                  <div className="absolute top-1 right-0.5 w-0.5 h-1 bg-blue-600 -rotate-12"></div>
                  <div className="absolute top-2 left-0.5 w-2 h-0.5 bg-red-600 rounded-full rotate-180"></div>
                </div>
                {/* Body (uniform being removed) */}
                <motion.div
                  className="w-0.5 h-4 mx-auto"
                  animate={{ backgroundColor: ["#2563eb", "#6b7280"] }}
                  transition={{ duration: 2 }}
                />
              </motion.div>
            </motion.div>

            {/* Badge being taken away */}
            <motion.div
              initial={{ x: 100, y: -10 }}
              animate={{ x: 50, y: -30 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute bottom-16 right-12"
            >
              <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black">
                <div className="absolute top-0.5 left-0.5 text-xs">★</div>
              </div>
            </motion.div>

            {/* Suspension notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm">SUSPENDED FROM DUTY</div>
            </motion.div>

            {/* Criminal charges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="absolute top-12 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm">₹1,00,000 FINE + 2 YEARS JAIL</div>
            </motion.div>

            {/* Family impact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="absolute bottom-2 left-2"
            >
              <div className="flex gap-1">
                <div className="w-2 h-3 bg-pink-400 rounded-t"></div>
                <div className="w-1 h-2 bg-pink-300 rounded-t"></div>
              </div>
              <div className="text-xs text-red-600">Family Suffers</div>
            </motion.div>
          </div>
        )

      default:
        return (
          <div className="relative h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Gavel className="h-16 w-16 text-red-600" />
            </motion.div>
          </div>
        )
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-red-500 border-2">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: 3 }}>
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </motion.div>
                    <CardTitle className="text-red-800">{punishment.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Punishment Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  {getPunishmentAnimation()}
                </motion.div>

                {/* Punishment Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">What Happens:</h4>
                    <p className="text-red-700">{punishment.description}</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">Legal Consequence:</h4>
                    <p className="text-orange-700">{punishment.legalConsequence}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {punishment.fine && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}
                        className="bg-red-100 p-4 rounded-lg flex items-center gap-3"
                      >
                        <DollarSign className="h-6 w-6 text-red-600" />
                        <div>
                          <div className="font-semibold text-red-800">Fine</div>
                          <div className="text-red-700">{punishment.fine}</div>
                        </div>
                      </motion.div>
                    )}

                    {punishment.imprisonment && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 }}
                        className="bg-red-100 p-4 rounded-lg flex items-center gap-3"
                      >
                        <Clock className="h-6 w-6 text-red-600" />
                        <div>
                          <div className="font-semibold text-red-800">Prison Time</div>
                          <div className="text-red-700">{punishment.imprisonment}</div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {punishment.additionalInfo && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"
                    >
                      <h4 className="font-semibold text-blue-800 mb-2">Additional Information:</h4>
                      <p className="text-blue-700">{punishment.additionalInfo}</p>
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="mt-6 text-center"
                >
                  <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
                    I Understand the Consequences
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
