import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
// console.log("4 productdetails");
// console.log(data);

const ProductDetail = () => {
  const { id } = useParams();
  //   console.log(9 + "" + id);

  const product = data.data.find((p) => p.id == id);
  // console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [select, setSelect] = useState(false);

  return (
    <div>
      <p className="mt-16 mb-8 text-gray">Home {">"} Products</p>

      <div className="flex al justify-between gap-12">
        <img
          src={product.attributes.image}
          alt={product.attributes.title}
          className="rounded-xl w-[45%]"
        />
        <div>
          <h2 className="text-4xl capitalize font-bold">
            {product.attributes.title}
          </h2>
          <h3 className="my-4 font-bold text-slate-400">
            {product.attributes.company}
          </h3>
          <p className="text-xl mb-4">$ {product.attributes.price / 100}</p>

          <p className="leading-8">{product.attributes.description}</p>
          <h4 className="font-semibold mt-4 mb-2">Colors</h4>
          <div className="flex gap-2">
            {product.attributes.colors.map((color, index) => (
              <span
                className="block rounded-full h-4 w-4 cursor-pointer"
                style={{
                  backgroundColor: color,
                  border: select ? "solid 2px black" : "none",
                }}
                key={index}
              ></span>
            ))}
          </div>
          <h4 className="font-semibold mt-4 mb-2">Amount</h4>
          <div>
            <select className="select select-primary w-[70%]">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <button className="btn btn-neutral uppercase mt-12">
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
