const stats = [
  { value: "5 mnt", label: "Waktu baca artikel" },
  { value: "3", label: "riset lokasi bisnis" },
  { value: "1", label: "Langkah awal" },
  { value: "100%", label: "Gratis diakses" },
];

const About = () => {
  return (
    <section id="tentang" className="bg-gray-50 py-16">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-6 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Tentang
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Halo, saya Chandra!
          </h2>
          <p className="mt-4 text-gray-600">
            BrandKu lahir dari satu kesadaran bahwa banyak orang yang ingin
            mengembangkan bisnisnya namun seringkali menghadapi masalah dalam
            melakukan riset, eksperimentasi, manajemen risiko dan pengambilan
            keputusan. Kami hadir membantu anda, tidak hanya solusi namun juga
            mendampingi dalam proses eksekusi, evaluasi dan improvementnya.
          </p>
          <p className="mt-4 text-gray-600">
            Anda bisa mengadakan sesi 1-on-1 discussion dan bergabung dengan
            komunitas kami.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <span className="block text-2xl font-bold text-brand-600">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;