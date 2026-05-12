interface NavLinkProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export const NavLink = ({ label, isActive, onClick }: NavLinkProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-white text-black shadow-sm'
        : 'text-gray-500 hover:text-black hover:bg-white/50'
    }`}
  >
    {label}
  </button>
)
