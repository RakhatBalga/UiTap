import { useState } from 'react'
import { Heart, User, Menu } from 'lucide-react'
import { NAV_ITEMS, type NavItemId } from '../../../entities/navigation/model/items'
import { NavLink } from '../../../shared/ui/nav-link'

export const Header = () => {
  const [activeTab, setActiveTab] = useState<NavItemId>('buy')

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Логотип UiTap */}
        <div className="text-2xl font-bold text-[#E91E63] cursor-pointer">
          UiTap
        </div>

        {/* Навигация по центру (твои 4 кнопки) */}
        <nav className="flex items-center bg-gray-100/60 p-1 rounded-2xl border border-gray-200/50">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </nav>

        {/* Правая часть: Профиль и Избранное (быстрый доступ) */}
        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-2 p-1.5 pl-3 border border-gray-200 rounded-full hover:shadow-md cursor-pointer transition-shadow">
            <Menu size={18} className="text-gray-600" />
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
              <User size={20} />
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}