"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export function FloatingFeedbackButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-indigo-600 hover:bg-indigo-700"
      >
        <Link href="/feedback">
          <MessageSquare className="h-5 w-5 mr-2" />
          Feedback
        </Link>
      </Button>
    </motion.div>
  )
}
