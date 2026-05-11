import { PropertyCard } from './components/PropertyCard'
import type { Property } from './types/property'
import { Header } from './components/header'

const sampleProperty: Property = {
  id: '1',
  title: 'Уютная квартира',
  price: 45_000_000,
  city: 'Алматы',
  district: 'Медеуский',
  rooms: 3,
  floor: 5,
  maxFloor: 9,
  description: 'Пример объекта для карточки.',
  images: [],
  area: 72,
}

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-3xl font-bold text-brand underline">
          Привет, UiTap!
        </h1>
        <div className="w-full max-w-sm">
          <PropertyCard property={sampleProperty} />
        </div>
      </main>
    </div>
  )
}

export default App