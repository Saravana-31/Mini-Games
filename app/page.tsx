import { GameSection } from "@/components/game-section"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Learn Indian Laws Through Interactive Games</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master your rights and understand Indian laws through engaging mini-games, real scenarios, and interactive
            learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GameSection
            title="Basic Laws and Rights"
            description="Start with fundamental rights and basic legal concepts"
            icon="✅"
            level="basic"
            color="from-green-400 to-green-600"
            hoverColor="hover:from-green-500 hover:to-green-700"
          />

          <GameSection
            title="Intermediate Laws and Rights"
            description="Dive deeper into constitutional and civil rights"
            icon="⚖️"
            level="intermediate"
            color="from-blue-400 to-blue-600"
            hoverColor="hover:from-blue-500 hover:to-blue-700"
          />

          <GameSection
            title="Most Important Laws and Rights"
            description="Critical laws every Indian citizen should know"
            icon="🚨"
            level="important"
            color="from-red-400 to-red-600"
            hoverColor="hover:from-red-500 hover:to-red-700"
          />
        </div>
      </main>
    </div>
  )
}
