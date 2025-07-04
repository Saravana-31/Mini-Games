"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Loader2 } from "lucide-react"

interface FeedbackStatusProps {
  status: "sending" | "success" | "error"
  recipientCount?: number
  errorMessage?: string
}

export function FeedbackStatus({ status, recipientCount = 5, errorMessage }: FeedbackStatusProps) {
  if (status === "sending") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md mx-auto"
      >
        <Card>
          <CardContent className="p-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mb-4"
            >
              <Loader2 className="h-16 w-16 text-blue-600 mx-auto" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Sending Feedback...</h2>
            <p className="text-gray-600 mb-4">Your feedback is being sent to {recipientCount} team members</p>
            <div className="flex justify-center gap-2">
              {Array.from({ length: recipientCount }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 bg-blue-500 rounded-full"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (status === "success") {
    const recipients = [
      "selvasenthil2006@gmail.com",
      "praveenkumarr.23aim@kongu.edu",
      "vedhak.23aim@kongu.edu",
      "pradeepas.23aim@kongu.edu",
      "noorshifamj.23aim@kongu.edu",
    ]

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-lg mx-auto"
      >
        <Card className="border-green-500 border-2">
          <CardContent className="p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4 text-green-800">Feedback Sent Successfully!</h2>
            <p className="text-gray-600 mb-6">Your feedback has been delivered to all {recipientCount} team members:</p>

            {/* Show individual recipients */}
            <div className="space-y-2 mb-6 text-left bg-green-50 p-4 rounded-lg">
              {recipients.map((email, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-green-800 font-medium">{email}</span>
                </motion.div>
              ))}
            </div>

            <Button onClick={() => window.location.reload()} className="bg-green-600 hover:bg-green-700">
              Send Another Feedback
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md mx-auto"
      >
        <Card className="border-red-500 border-2">
          <CardContent className="p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <XCircle className="h-16 w-16 text-red-600 mx-auto" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4 text-red-800">Failed to Send Feedback</h2>
            <p className="text-gray-600 mb-4">We encountered an issue while sending your feedback. Please try again.</p>

            {errorMessage && (
              <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="font-semibold text-red-800">Error Details:</span>
                </div>
                <p className="text-red-700 text-sm">{errorMessage}</p>
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">Alternative Contact:</h4>
              <p className="text-blue-700 text-sm">
                You can also reach us directly at: <br />
                <a href="mailto:selvasenthil2006@gmail.com" className="underline">
                  selvasenthil2006@gmail.com
                </a>
              </p>
            </div>

            <div className="flex gap-3 justify-center">
              <Button onClick={() => window.location.reload()} className="bg-red-600 hover:bg-red-700">
                Try Again
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return null
}
