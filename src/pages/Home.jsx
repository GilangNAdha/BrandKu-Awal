import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";
import { featureData } from "../data/features";

const Home = () => {
  return (
    <section>
      <Hero />

      <div className="mx-auto max-w-6xl px-8 py-16">
        <h2 className="mb-2 text-center text-3xl font-medium text-slate-900">
          Fitur Unggulan
        </h2>
        <p className="mb-10 text-center font-light text-slate-600">
          Semua yang kamu butuhkan dalam satu platform.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featureData.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 pb-16">
        <h2 className="mb-2 text-center text-3xl font-medium text-slate-900">
          Katalog Produk
        </h2>
        <p className="mb-10 text-center font-light text-slate-600">
          Data produk live dari{" "}
          <a
            href="https://fakestoreapi.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-pink-600 hover:underline"
          >
            Fake Store API
          </a>
          .
        </p>
        <CardGrid />
      </div>
    </section>
  );
};

export default Home;
