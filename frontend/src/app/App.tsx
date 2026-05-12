import { Header } from '../widgets/header/ui/Header'
import { Hero } from '../widgets/hero-chat/Hero'

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col w-full">
        <Hero />
      </main>
    </div>
  )
}

export default App
