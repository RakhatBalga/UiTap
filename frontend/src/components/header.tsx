import { useEffect, useId, useState } from 'react'

const NAV_LINKS = [
  { href: '#', label: 'Buy' },
  { href: '#', label: 'Rent' },
  { href: '#', label: 'Sell' },
] as const

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => setMenuOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white text-left shadow-sm shadow-gray-900/5">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex min-w-0 flex-1 items-center gap-8">
            <div className="shrink-0 cursor-pointer text-2xl font-black tracking-tighter text-brand">
              UITAP<span className="text-gray-900">.KZ</span>
            </div>
            <nav
              className="hidden min-w-0 items-center gap-4 text-sm font-medium text-gray-600 sm:gap-6 md:flex"
              aria-label="Main"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <a key={label} href={href} className="transition hover:text-brand">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="text-sm font-medium text-gray-600 transition hover:text-brand"
            >
              Login
            </button>
            <button
              type="button"
              className="hidden rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover sm:inline-flex"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100 active:bg-gray-200 md:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="flex h-[14px] w-[22px] flex-col justify-between" aria-hidden={true}>
                <span
                  className={`h-0.5 w-full origin-center rounded-full bg-current transition duration-200 ease-out ${
                    menuOpen ? 'translate-y-[6px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition duration-200 ease-out ${
                    menuOpen ? 'scale-x-0 opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full origin-center rounded-full bg-current transition duration-200 ease-out ${
                    menuOpen ? '-translate-y-[6px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
            menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0">
            <nav
              className="flex flex-col gap-1 border-t border-gray-100 px-4 py-4"
              aria-label="Mobile"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-brand active:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="mt-3 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  className="w-full rounded-lg px-3 py-3 text-left text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="mt-1 w-full rounded-lg bg-brand px-3 py-3 text-center text-base font-semibold text-white transition hover:bg-brand-hover"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-gray-900/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
      />
    </>
  )
}
