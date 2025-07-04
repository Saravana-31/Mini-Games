"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface StickmanAnimationProps {
  scenarioType:
    | "police-bribe"
    | "document-check"
    | "work-hours"
    | "domestic-violence"
    | "corruption"
    | "traffic-violation"
}

export function StickmanAnimation({ scenarioType }: StickmanAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationPhase < 3) {
        setAnimationPhase(animationPhase + 1)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [animationPhase])

  const renderTrafficViolation = () => (
    <div className="relative h-32 bg-white/10 rounded-lg overflow-hidden">
      {/* Road */}
      <div className="absolute bottom-0 w-full h-4 bg-gray-600">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2"></div>
      </div>

      {/* Stickman on bike */}
      <motion.div
        initial={{ x: -50 }}
        animate={{
          x: animationPhase >= 1 ? 100 : -50,
        }}
        transition={{ duration: 2, ease: "linear" }}
        className="absolute bottom-4 flex items-end"
      >
        {/* Bike */}
        <div className="relative">
          <div className="w-8 h-1 bg-gray-800 mb-1"></div>
          <div className="flex gap-2">
            <div className="w-3 h-3 border-2 border-gray-800 rounded-full"></div>
            <div className="w-3 h-3 border-2 border-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Stickman */}
        <div className="relative -ml-2 mb-2">
          {/* Head (no helmet) */}
          <motion.div
            className="w-3 h-3 border-2 border-black rounded-full bg-white/80"
            animate={animationPhase >= 2 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, repeat: 2 }}
          />
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
      </motion.div>

      {/* Police officer */}
      <AnimatePresence>
        {animationPhase >= 2 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 150, opacity: 1 }}
            className="absolute bottom-4 right-8"
          >
            {/* Police stickman */}
            <div className="relative">
              {/* Head with cap */}
              <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
                <div className="absolute -top-1 left-0 w-4 h-1 bg-blue-600 rounded-t"></div>
              </div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-black mx-auto bg-blue-600"></div>
              {/* Arms - one raised (stop gesture) */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-0.5 bg-black -rotate-45"></div>
                <div className="w-3 h-0.5 bg-black rotate-12 -mt-0.5"></div>
              </div>
              {/* Legs */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-0.5 bg-black rotate-12"></div>
                <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
              </div>
            </div>

            {/* Stop sign */}
            <motion.div
              animate={{ scale: [0, 1.2, 1] }}
              className="absolute -top-6 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pause indicator */}
      {animationPhase >= 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">DECISION TIME!</div>
        </motion.div>
      )}
    </div>
  )

  const renderCorruption = () => (
    <div className="relative h-32 bg-white/10 rounded-lg overflow-hidden">
      {/* Office background */}
      <div className="absolute bottom-0 w-full h-6 bg-gray-700"></div>
      <div className="absolute bottom-6 left-4 w-16 h-8 bg-brown-600 rounded-t"></div>

      {/* Citizen stickman */}
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: animationPhase >= 1 ? 30 : -30 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-6"
      >
        <div className="relative">
          {/* Head */}
          <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80"></div>
          {/* Body */}
          <div className="w-0.5 h-4 bg-black mx-auto"></div>
          {/* Arms */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-0.5 bg-black rotate-12"></div>
            <div className="w-3 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
          </div>
          {/* Legs */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-0.5 bg-black rotate-12"></div>
            <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
          </div>
        </div>
      </motion.div>

      {/* Government official */}
      <div className="absolute bottom-6 right-8">
        <div className="relative">
          {/* Head */}
          <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80"></div>
          {/* Body */}
          <div className="w-0.5 h-4 bg-black mx-auto bg-gray-600"></div>
          {/* Arms */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-3 h-0.5 bg-black"
              animate={animationPhase >= 2 ? { rotate: [12, -45, 12] } : { rotate: 12 }}
              transition={{ duration: 1, repeat: 2 }}
            />
            <div className="w-3 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
          </div>
          {/* Legs */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-0.5 bg-black rotate-12"></div>
            <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
          </div>
        </div>
      </div>

      {/* Money exchange animation */}
      <AnimatePresence>
        {animationPhase >= 2 && (
          <motion.div
            initial={{ x: 30, y: -10, opacity: 0 }}
            animate={{ x: 80, y: -10, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-12 left-8"
          >
            <div className="w-4 h-2 bg-green-500 rounded text-xs flex items-center justify-center">₹</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pause indicator */}
      {animationPhase >= 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-bold">BRIBERY ALERT!</div>
        </motion.div>
      )}
    </div>
  )

  const renderWorkHours = () => (
    <div className="relative h-32 bg-white/10 rounded-lg overflow-hidden">
      {/* Factory background */}
      <div className="absolute bottom-0 w-full h-8 bg-gray-600"></div>
      <div className="absolute bottom-8 left-2 w-20 h-12 bg-gray-700 rounded-t"></div>

      {/* Clock */}
      <div className="absolute top-2 right-2 w-8 h-8 border-2 border-black rounded-full bg-white flex items-center justify-center">
        <motion.div
          className="w-0.5 h-2 bg-black origin-bottom"
          animate={{ rotate: animationPhase * 90 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="w-0.5 h-3 bg-red-500 origin-bottom absolute"
          animate={{ rotate: animationPhase * 180 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Worker stickman */}
      <motion.div
        className="absolute bottom-8 left-8"
        animate={
          animationPhase >= 2
            ? {
                rotate: [0, -10, 10, 0],
                y: [0, -2, 0],
              }
            : {}
        }
        transition={{ duration: 1, repeat: 3 }}
      >
        <div className="relative">
          {/* Head (tired expression) */}
          <motion.div
            className="w-3 h-3 border-2 border-black rounded-full bg-white/80"
            animate={animationPhase >= 2 ? { scale: [1, 0.9, 1] } : {}}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          {/* Body */}
          <div className="w-0.5 h-4 bg-black mx-auto"></div>
          {/* Arms (working motion) */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-3 h-0.5 bg-black"
              animate={animationPhase >= 1 ? { rotate: [45, -45, 45] } : { rotate: 45 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-3 h-0.5 bg-black -mt-0.5"
              animate={animationPhase >= 1 ? { rotate: [-45, 45, -45] } : { rotate: -45 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          {/* Legs */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-0.5 bg-black"></div>
            <div className="w-2 h-0.5 bg-black -mt-0.5"></div>
          </div>
        </div>
      </motion.div>

      {/* Boss stickman */}
      <AnimatePresence>
        {animationPhase >= 2 && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 120, opacity: 1 }}
            className="absolute bottom-8 right-8"
          >
            <div className="relative">
              {/* Head with angry expression */}
              <div className="w-3 h-3 border-2 border-black rounded-full bg-red-200 relative">
                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-red-600"></div>
                <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-600"></div>
              </div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-black mx-auto bg-gray-800"></div>
              {/* Arms (pointing) */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-0.5 bg-black -rotate-45"></div>
                <div className="w-3 h-0.5 bg-black rotate-12 -mt-0.5"></div>
              </div>
              {/* Legs */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-0.5 bg-black rotate-12"></div>
                <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overtime indicator */}
      {animationPhase >= 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold">14 HOURS!</div>
        </motion.div>
      )}
    </div>
  )

  const renderDomesticViolence = () => (
    <div className="relative h-32 bg-white/10 rounded-lg overflow-hidden">
      {/* House background */}
      <div className="absolute bottom-0 left-4 w-24 h-16 bg-yellow-200 border-2 border-brown-600">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="w-0 h-0 border-l-12 border-r-12 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
        </div>
        {/* Window */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-blue-200 border border-brown-600"></div>
        {/* Door */}
        <div className="absolute bottom-0 right-2 w-3 h-8 bg-brown-600"></div>
      </div>

      {/* Victim (inside house) */}
      <motion.div
        className="absolute bottom-2 left-6"
        animate={
          animationPhase >= 2
            ? {
                x: [0, -2, 2, 0],
                scale: [1, 0.9, 1],
              }
            : {}
        }
        transition={{ duration: 0.5, repeat: 4 }}
      >
        <div className="relative">
          {/* Head (scared) */}
          <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
            <div className="absolute top-1 left-0.5 w-0.5 h-0.5 bg-blue-600"></div>
            <div className="absolute top-1 right-0.5 w-0.5 h-0.5 bg-blue-600"></div>
          </div>
          {/* Body */}
          <div className="w-0.5 h-4 bg-black mx-auto"></div>
          {/* Arms (defensive) */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-0.5 bg-black -rotate-45"></div>
            <div className="w-3 h-0.5 bg-black rotate-45 -mt-0.5"></div>
          </div>
          {/* Legs */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-0.5 bg-black"></div>
            <div className="w-2 h-0.5 bg-black -mt-0.5"></div>
          </div>
        </div>
      </motion.div>

      {/* Abuser */}
      <AnimatePresence>
        {animationPhase >= 1 && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 10, opacity: 1 }}
            className="absolute bottom-2 left-12"
          >
            <motion.div
              animate={
                animationPhase >= 2
                  ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 0.3, repeat: 5 }}
              className="relative"
            >
              {/* Head (angry) */}
              <div className="w-3 h-3 border-2 border-black rounded-full bg-red-200 relative">
                <div className="absolute top-0.5 left-0.5 w-1 h-0.5 bg-red-600 rotate-12"></div>
                <div className="absolute top-0.5 right-0.5 w-1 h-0.5 bg-red-600 -rotate-12"></div>
              </div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-black mx-auto"></div>
              {/* Arms (aggressive) */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-3 h-0.5 bg-black"
                  animate={animationPhase >= 2 ? { rotate: [45, -45, 45] } : { rotate: 45 }}
                  transition={{ duration: 0.2, repeat: 8 }}
                />
                <div className="w-3 h-0.5 bg-black rotate-12 -mt-0.5"></div>
              </div>
              {/* Legs */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-0.5 bg-black rotate-12"></div>
                <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Neighbor witness */}
      <AnimatePresence>
        {animationPhase >= 3 && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 140, opacity: 1 }}
            className="absolute bottom-2 right-8"
          >
            <div className="relative">
              {/* Head (concerned) */}
              <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
                <div className="absolute top-1 left-0.5 w-0.5 h-0.5 bg-black"></div>
                <div className="absolute top-1 right-0.5 w-0.5 h-0.5 bg-black"></div>
                <div className="absolute top-1.5 left-1 w-1 h-0.5 bg-orange-400 rounded-full"></div>
              </div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-black mx-auto"></div>
              {/* Arms */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-0.5 bg-black rotate-12"></div>
                <div className="w-3 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
              </div>
              {/* Legs */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-0.5 bg-black rotate-12"></div>
                <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decision point */}
      {animationPhase >= 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-bold">HELP NEEDED!</div>
        </motion.div>
      )}
    </div>
  )

  const renderDocumentCheck = () => (
    <div className="relative h-32 bg-white/10 rounded-lg overflow-hidden">
      {/* Street background */}
      <div className="absolute bottom-0 w-full h-4 bg-gray-600">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2"></div>
      </div>

      {/* Citizen walking */}
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: animationPhase >= 1 ? 60 : -30 }}
        transition={{ duration: 2 }}
        className="absolute bottom-4"
      >
        <motion.div
          animate={
            animationPhase < 2
              ? {
                  rotate: [0, 5, -5, 0],
                }
              : {}
          }
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="relative"
        >
          {/* Head */}
          <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80"></div>
          {/* Body */}
          <div className="w-0.5 h-4 bg-black mx-auto"></div>
          {/* Arms (walking motion) */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-3 h-0.5 bg-black"
              animate={animationPhase < 2 ? { rotate: [12, -12, 12] } : { rotate: 45 }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-3 h-0.5 bg-black -mt-0.5"
              animate={animationPhase < 2 ? { rotate: [-12, 12, -12] } : { rotate: -45 }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          {/* Legs (walking motion) */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-2 h-0.5 bg-black"
              animate={animationPhase < 2 ? { rotate: [12, -12, 12] } : { rotate: 0 }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-2 h-0.5 bg-black -mt-0.5"
              animate={animationPhase < 2 ? { rotate: [-12, 12, -12] } : { rotate: 0 }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Police officer */}
      <AnimatePresence>
        {animationPhase >= 2 && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 100, opacity: 1 }}
            className="absolute bottom-4 right-8"
          >
            <div className="relative">
              {/* Head with cap */}
              <div className="w-3 h-3 border-2 border-black rounded-full bg-white/80 relative">
                <div className="absolute -top-1 left-0 w-4 h-1 bg-blue-600 rounded-t"></div>
              </div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-blue-600 mx-auto"></div>
              {/* Arms - one raised (stop gesture) */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-3 h-0.5 bg-black"
                  animate={{ rotate: [-90, -70, -90] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                />
                <div className="w-3 h-0.5 bg-black rotate-12 -mt-0.5"></div>
              </div>
              {/* Legs */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-0.5 bg-black rotate-12"></div>
                <div className="w-2 h-0.5 bg-black -rotate-12 -mt-0.5"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Documents request */}
      {animationPhase >= 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-bold">SHOW DOCUMENTS!</div>
        </motion.div>
      )}
    </div>
  )

  const getAnimation = () => {
    switch (scenarioType) {
      case "traffic-violation":
        return renderTrafficViolation()
      case "corruption":
        return renderCorruption()
      case "work-hours":
        return renderWorkHours()
      case "domestic-violence":
        return renderDomesticViolence()
      case "document-check":
        return renderDocumentCheck()
      default:
        return renderTrafficViolation()
    }
  }

  return (
    <div className="relative">
      {getAnimation()}

      {/* Animation controls */}
      <div className="absolute bottom-2 left-2 flex gap-1">
        {[0, 1, 2, 3].map((phase) => (
          <div key={phase} className={`w-2 h-2 rounded-full ${animationPhase >= phase ? "bg-white" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  )
}
