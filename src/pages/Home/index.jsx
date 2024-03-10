import React from "react";
// import useProductData from "../../hooks/useProductData";
import data from "../../../data.json";
import { Link } from "react-router-dom";
const products = data.data;
const featuredProduct = products.filter(
  (product) => product.attributes.featured
);

// const useProductData = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "productshttps://strapi-store-server.onrender.com/api/"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//         setError("An error occurred while fetching data.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { loading, products, error };
// };
function Home() {
  // const { loading, products, error } = useProductData();
  // console.log(products);

  return (
    <div>
      <div id="hero" className="flex justify-between gap-24 mt-20">
        <div>
          <h1 className="text-6xl font-bold">
            We are changing the way people shop
          </h1>
          <p className="mt-6 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button className="btn bg-blue-500 mt-6 text-lg text-white">
            Our products
          </button>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl mt-20 mb-12">Featured Products</h2>
        <hr className="mb-16" />
        <div className="flex gap-4 flex-wrap">
          {featuredProduct.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="card w-96 bg-base-100 shadow-xl cursor-pointer"
            >
              <figure className="px-5 pt-5">
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                  className="rounded-xl h-48 w-full overflow-x-hidden"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.attributes.title}</h2>
                <p>$ {product.attributes.price / 100}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default Home;
