import { useState } from 'react';
import { Link } from 'react-router';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-6 shadow-sm backdrop-blur-md md:px-16">
      <h1 className="text-3xl font-medium text-pink-500">Brandku</h1>

      <button
        className="text-slate-700 md:hidden"
        aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 flex-col w-full gap-6 md:w-auto md:flex-row md:gap-8 bg-white p-6 font-medium text-slate-600 shadow-md md:bg-transparent md:p-0 md:shadow-none`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Beranda</Link>
        <Link to="/home" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Fitur</Link>
        <Link to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Harga</Link>
      </nav>
    </header>
  );
};

export default Header;
