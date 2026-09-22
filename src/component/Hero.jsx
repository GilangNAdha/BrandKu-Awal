const Hero = ({ title }) => {
  return (
    <section id="beranda" className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;