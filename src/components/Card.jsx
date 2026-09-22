const Card = ({ title, subtitle, image, category, price }) => {
  // Varian kartu produk (data dari Fake Store API)
  if (image) {
    return (
      <div className="flex flex-col overflow-hidden rounded-xl border border-slate-300 bg-white">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-pink-600">
            {category}
          </p>
          <h3 className="mt-1 line-clamp-2 text-lg font-medium text-slate-900">
            {title}
          </h3>
          <p className="mt-3 text-xl font-medium text-green-600">${price}</p>
        </div>
      </div>
    );
  }

  // Varian kartu fitur (data lokal)
  return (
    <div className="rounded-xl border border-slate-300 bg-white p-8">
      <h3 className="mb-4 text-2xl font-medium text-green-600">{title}</h3>
      <p className="font-light text-slate-600">{subtitle}</p>
    </div>
  );
};

export default Card;
