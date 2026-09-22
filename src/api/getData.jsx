import axios from "axios";

export const getData = async () => {
    try {
        const response = await axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        });
        return response.data;
    } catch (error) {
        console.error("Gagal mengambil data dari Fake Store API:", error.message);
        return [];
    }
}
