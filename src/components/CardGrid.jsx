import { useEffect, useState } from "react";
import { getData } from "../api/getData";
import Card from "./Card";

function CardGrid() {
    const [dataProduct, setDataProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setDataProduct(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4 rounded-xl border-2 border-slate-400 p-4 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
                <p className="col-span-full py-12 text-center text-slate-500">
                    Memuat produk…
                </p>
            ) : dataProduct.length === 0 ? (
                <p className="col-span-full py-12 text-center text-slate-500">
                    Gagal memuat produk. Coba muat ulang halaman.
                </p>
            ) : (
                dataProduct.slice(0, 6).map((product) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        category={product.category}
                        price={product.price}
                    />
                ))
            )}
        </div>
    );
}
export default CardGrid;
