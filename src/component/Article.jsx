const Article = () => {
  return (
    <article id="artikel" className="py-16">
      <div className="mx-auto w-full max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Artikel
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Tips Riset Memilih Lokasi Bisnis
        </h2>
        <p className="mt-3 text-sm text-gray-400">by: Chandra</p>

        <div className="mt-8 space-y-6 text-[1.05rem] leading-relaxed text-gray-600">
          <p>
            Berdasarkan pengamatan dan pengalaman saya sebelum memulai bisnis
            sebaiknya kita mengumpulkan data dulu:
          </p>

          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="font-semibold text-brand-600">1.</span>
              <span>Kepadatan penduduk</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-brand-600">2.</span>
              <span>Jaringan jalan (OpenStreetMap)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-brand-600">3.</span>
              <span>Sebaran bangunan: Kos, Apartemen, Perumahan, Perkantoran.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-brand-600">4.</span>
              <span>Titik minimarket</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-brand-600">5.</span>
              <span>
                Bisnis sejenis yang sudah berjalan lebih dari satu tahun
              </span>
            </li>
          </ol>

          <p>
            Dengan melakukan desktop research, analisis lapangan dan ngobrol
            dengan orang sekitar serta calon target market kita, akan
            memperkecil gap antara asumsi kita dan realitas di lapangan.
            Sehingga risiko yang kita hadapi akan bisa dimanage dan diperkecil.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Article;