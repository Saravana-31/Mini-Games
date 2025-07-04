"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, ArrowRight, AlertTriangle, X } from "lucide-react"
import Link from "next/link"
import { ScenarioAnimation } from "@/components/scenario-animation"
import { PunishmentAnimation } from "@/components/punishment-animation"
import { SuccessAnimation } from "@/components/success-animation"

interface GameQuestion {
  id: number
  scenario: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
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

const sampleQuestions: Record<string, GameQuestion[]> = {
  basic: [
    {
      id: 1,
      scenario: "A police officer stops you at a checkpoint and asks for your documents without stating any reason.",
      question: "What is your fundamental right in this situation?",
      options: [
        "You must comply immediately without question",
        "Right to know the reason for checking documents",
        "You can refuse to show any documents",
        "You must pay a fine for questioning",
      ],
      correctAnswer: 1,
      explanation:
        "Under Article 22 of the Indian Constitution, you have the right to know the grounds of detention or checking. Police must have reasonable suspicion to check documents.",
      punishment: {
        title: "Arbitrary Police Action",
        description:
          "The police officer faces disciplinary action for arbitrary document checking without reasonable grounds.",
        legalConsequence:
          "Under Section 166 of IPC, public servants acting arbitrarily can face imprisonment up to 2 years",
        fine: "₹10,000 - ₹50,000",
        imprisonment: "6 months to 2 years",
        additionalInfo: "Complaint can be filed with State Human Rights Commission",
      },
      scenarioType: "document-check",
    },
    {
      id: 2,
      scenario:
        "Your employer forces you to work 14 hours daily without overtime pay and threatens to fire you if you refuse.",
      question: "Which law protects you in this situation?",
      options: [
        "No law protects workers in private companies",
        "Factories Act, 1948 and Labour Laws",
        "Only union rules apply here",
        "Company policy overrides all laws",
      ],
      correctAnswer: 1,
      explanation:
        "The Factories Act, 1948 limits working hours to 9 hours per day and 48 hours per week. Overtime must be paid at double the rate for extra hours.",
      punishment: {
        title: "Labour Law Violation",
        description: "The employer faces legal action for violating working hour limits and not paying overtime.",
        legalConsequence: "Under Factories Act 1948, employers violating working hours face severe penalties",
        fine: "₹2,00,000 - ₹10,00,000",
        imprisonment: "1 to 3 years",
        additionalInfo: "Labour Commissioner can order immediate compliance and back-payment of overtime",
      },
      scenarioType: "work-hours",
    },
  ],
  intermediate: [
    {
      id: 1,
      scenario: "A government official demands ₹5,000 bribe to approve your legitimate business license application.",
      question: "Under which act can you report this corruption?",
      options: [
        "Indian Penal Code Section 420 only",
        "Prevention of Corruption Act, 1988",
        "No specific anti-corruption law exists",
        "Only internal departmental complaints allowed",
      ],
      correctAnswer: 1,
      explanation:
        "The Prevention of Corruption Act, 1988 specifically deals with corruption by public servants. You can report to CBI, state anti-corruption bureau, or use online portals.",
      punishment: {
        title: "Corruption by Public Servant",
        description:
          "The government official is arrested by CBI and faces corruption charges under Prevention of Corruption Act.",
        legalConsequence: "Under Prevention of Corruption Act 1988, demanding bribes is a serious offense",
        fine: "₹1,00,000 - ₹5,00,000",
        imprisonment: "3 to 7 years",
        additionalInfo: "Immediate suspension from service and criminal prosecution. Property can be attached.",
      },
      scenarioType: "corruption",
    },
    {
      id: 2,
      scenario:
        "You witness your neighbor regularly beating his wife and she asks for help but is too scared to file a complaint.",
      question: "What is your legal obligation under Indian law?",
      options: [
        "It's a private family matter, don't interfere",
        "Report to police under Domestic Violence Act",
        "Only the victim can file a complaint",
        "Wait for the victim to approach authorities first",
      ],
      correctAnswer: 1,
      explanation:
        "Under the Protection of Women from Domestic Violence Act, 2005, any person can report domestic violence. It's a cognizable offense and police must act immediately.",
      punishment: {
        title: "Domestic Violence Case",
        description:
          "The abuser is arrested immediately and faces charges under multiple sections of IPC and Domestic Violence Act.",
        legalConsequence: "Under Protection of Women from Domestic Violence Act 2005 and IPC Section 498A",
        fine: "₹50,000 - ₹2,00,000",
        imprisonment: "1 to 3 years",
        additionalInfo: "Immediate protection order issued. Counseling mandatory. Can lose custody of children.",
      },
      scenarioType: "domestic-violence",
    },
  ],
  important: [
    {
      id: 1,
      scenario:
        "A traffic police officer stops you for a minor violation and demands ₹500 cash instead of issuing a proper challan.",
      question: "What should you do according to Indian law?",
      options: [
        "Pay the cash to avoid hassle",
        "Demand proper receipt and refuse cash payment",
        "Negotiate for a lower amount",
        "Accept that this is normal practice",
      ],
      correctAnswer: 1,
      explanation:
        "Under Motor Vehicle Act and Prevention of Corruption Act, all fines must be paid through proper channels with receipts. Cash payments to officers are illegal.",
      punishment: {
        title: "Traffic Police Corruption",
        description:
          "The traffic police officer faces corruption charges and departmental action for demanding illegal cash payment.",
        legalConsequence: "Under Prevention of Corruption Act 1988 and Police Act",
        fine: "₹25,000 - ₹1,00,000",
        imprisonment: "6 months to 2 years",
        additionalInfo:
          "Immediate suspension from duty. Can be dismissed from service. Criminal record affects family.",
      },
      scenarioType: "traffic-violation",
    },
  ],
}

export default function GameLevel({ params }: { params: { category: string; level: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showPunishment, setShowPunishment] = useState(false)
  const [score, setScore] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const questions = sampleQuestions[params.category] || sampleQuestions.basic
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1)
      // Show success animation for correct answer
      setTimeout(() => {
        setShowSuccess(true)
      }, 1000)
    } else {
      // Show punishment animation for wrong answer
      setTimeout(() => {
        setShowPunishment(true)
      }, 1500)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowPunishment(false)
      setShowSuccess(false) // Add this line
    } else {
      setGameComplete(true)
    }
  }

  const closePunishment = () => {
    setShowPunishment(false)
  }

  const closeSuccess = () => {
    setShowSuccess(false)
  }

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Level Complete!</h2>
              <p className="text-lg mb-4">
                You scored {score} out of {questions.length}
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/feedback">Give Feedback</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold capitalize">
              {params.category} Laws - Level {params.level.replace("level", "")}
            </h1>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Scenario Animation */}
            <ScenarioAnimation scenarioType={question.scenarioType} scenario={question.scenario} />

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Legal Scenario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 font-medium">{question.scenario}</p>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">{question.question}</h3>

                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        showResult
                          ? index === question.correctAnswer
                            ? "border-green-500 bg-green-50 text-green-800 shadow-md"
                            : index === selectedAnswer && index !== question.correctAnswer
                              ? "border-red-500 bg-red-50 text-red-800 shadow-md"
                              : "border-gray-200 bg-gray-50"
                          : selectedAnswer === index
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {showResult && index === question.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card
                    className={`mb-6 ${selectedAnswer === question.correctAnswer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {selectedAnswer === question.correctAnswer ? (
                          <>
                            <CheckCircle className="h-6 w-6 text-green-600" />
                            <h3 className="text-lg font-semibold text-green-800">Correct! Well Done!</h3>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-6 w-6 text-red-600" />
                            <h3 className="text-lg font-semibold text-red-800">Incorrect - See Legal Consequences</h3>
                          </>
                        )}
                      </div>

                      <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                        <h4 className="font-semibold mb-2 text-blue-800">Legal Explanation:</h4>
                        <p className="text-gray-800">{question.explanation}</p>
                      </div>

                      {selectedAnswer !== question.correctAnswer && (
                        <div className="bg-red-100 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            <h4 className="font-semibold text-red-800">Real Legal Consequences:</h4>
                          </div>
                          <p className="text-red-700 mb-2">{question.punishment.legalConsequence}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            {question.punishment.fine && (
                              <div className="bg-red-200 p-2 rounded">
                                <strong>Fine:</strong> {question.punishment.fine}
                              </div>
                            )}
                            {question.punishment.imprisonment && (
                              <div className="bg-red-200 p-2 rounded">
                                <strong>Imprisonment:</strong> {question.punishment.imprisonment}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <Button onClick={handleNext} className="w-full">
                        {currentQuestion < questions.length - 1 ? (
                          <>
                            Next Question <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          "Complete Level"
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Punishment Animation Modal */}
        <PunishmentAnimation
          isOpen={showPunishment}
          onClose={closePunishment}
          punishment={question.punishment}
          scenarioType={question.scenarioType}
        />

        {/* Success Animation Modal */}
        {showSuccess && selectedAnswer === question.correctAnswer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-green-500/20 flex items-center justify-center p-4 z-50"
            onClick={closeSuccess}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-green-500 border-2 bg-green-50">
                <CardHeader className="bg-green-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: 3 }}>
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </motion.div>
                      <CardTitle className="text-green-800">Excellent Choice! You Know Your Rights!</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm" onClick={closeSuccess}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <SuccessAnimation scenarioType={question.scenarioType} />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-4"
                  >
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">Why This is Correct:</h4>
                      <p className="text-green-700">{question.explanation}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-center"
                  >
                    <Button onClick={closeSuccess} className="bg-green-600 hover:bg-green-700">
                      Continue Learning!
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
