import React from "react";
import data from "../../../data.json";
import { Link } from "react-router-dom";
const products = data.data;

function Products() {
  return (
    <div>
      <h2 className="text-4xl mt-20 mb-12">Featured Products</h2>
      <hr className="mb-16" />
      <div className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="card w-80 bg-base-100 shadow-xl cursor-pointer"
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
  );
}

export default Products;
