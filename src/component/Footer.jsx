const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-14 pb-8 text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm text-white">
                B
              </span>
              BrandKu
            </div>
            <p className="max-w-[38ch] text-sm text-gray-400">
              Less worry, Lets grow together!
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#beranda" className="transition hover:text-white">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#artikel" className="transition hover:text-white">
                  Artikel
                </a>
              </li>
              <li>
                <a href="#tentang" className="transition hover:text-white">
                  Tentang
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Kontak
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:halo@brandku.id"
                  className="transition hover:text-white"
                >
                  halo@brandku.id
                </a>
              </li>
              <li>
                <a href="#beranda" className="transition hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#beranda" className="transition hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-gray-500">
          &copy; {year} BrandKu. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;