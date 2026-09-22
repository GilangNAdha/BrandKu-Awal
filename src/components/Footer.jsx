const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-16 py-12 mt-20 text-white bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-medium text-pink-500">Brandku</h2>
          <p className="text-slate-400">Less worry, Lets grow together!</p>
        </div>

        <p className="text-sm text-slate-400">
          &copy; {year} Brandku. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;