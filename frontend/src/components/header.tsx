export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-black text-blue-600 tracking-tighter cursor-pointer">
            UITAP<span className="text-gray-900">.KZ</span>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">
              Buy
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Rent
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Sell
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
