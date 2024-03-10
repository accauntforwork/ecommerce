// useProductData.js
import { useState, useEffect } from "react";

const useProductData = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, products, error };
};

export default useProductData;
