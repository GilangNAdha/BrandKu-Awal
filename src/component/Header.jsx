import { useState } from "react";

const navItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#artikel", label: "Artikel" },
  { href: "#tentang", label: "Tentang" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={closeMenu}
          className="flex items-center gap-2 text-base font-bold text-gray-900 sm:text-lg"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            B
          </span>
          BrandKu - Chandra Consulting Group
        </a>

        {/* Tombol menu (mobile) */}
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded bg-gray-900 transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-gray-900 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-gray-900 transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Navigasi */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col gap-1 border-b border-gray-200 bg-white p-6 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded px-1 py-2 text-[0.95rem] font-medium text-gray-500 transition hover:text-gray-900 md:py-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#artikel"
            onClick={closeMenu}
            className="rounded-lg bg-brand-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-700"
          >
            Baca Artikel
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;