import React, { useEffect, useRef, useState } from "react";

const MENU_ITEMS = [
  { id: "settings", label: "Настройки" },
  { id: "language", label: "Язык" },
  { id: "sell", label: "Продать кв" },
  { id: "rent", label: "Сдать кв" },
] as const;

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (!menuWrapRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white px-6 py-4 sm:px-8">
      <div className="mx-auto flex max-w-[2520px] items-center gap-4 sm:gap-8">
        <div className="shrink-0 text-2xl font-bold text-rose-500">UiTap</div>

        <div className="flex min-w-0 flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              name="search"
              placeholder="Ваши критерии"
              className="w-full rounded-full border border-neutral-200 bg-white py-2 pl-4 pr-11 text-xs text-neutral-800 shadow-sm outline-none transition placeholder:text-neutral-400 hover:shadow-md focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 sm:text-sm"
              autoComplete="off"
            />
            <button
              type="button"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-rose-500 p-1.5 text-white shadow-sm transition hover:bg-rose-600"
              aria-label="Поиск"
            >
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-3 w-3 stroke-3 fill-none stroke-current"
              >
                <circle cx="14" cy="14" r="9" />
                <path d="m22 22 7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative shrink-0" ref={menuWrapRef}>
          <button
            type="button"
            id="header-menu-button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls="header-user-menu"
            className={`rounded-full border border-neutral-300 bg-white p-2.5 text-neutral-600 shadow-sm transition hover:shadow-md ${
              menuOpen ? "shadow-md ring-2 ring-neutral-200" : ""
            }`}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {menuOpen ? (
            <div
              id="header-user-menu"
              role="menu"
              aria-labelledby="header-menu-button"
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-48 overflow-hidden rounded-2xl border border-neutral-200 bg-white py-1 shadow-lg"
            >
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  className="block w-full px-4 py-2.5 text-left text-sm text-neutral-800 transition hover:bg-neutral-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
