import React from "react";
import data from "../../../data.json";
const products = data.data;

function Card() {
  return (
    <div>
      <h2 className="text-4xl mt-20 mb-12">Featured Products</h2>
      <hr className="mb-16" />
      <div>
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between">
              <div>
                <img
                  className="h-32 w-32 rounded-lg"
                  src={product.attributes.image}
                  alt=""
                />
              </div>
              <div>
                <p>{product.attributes.title}</p>
                <p>{product.attributes.company}</p>
                <p className="flex gap-2 items-center">
                  <span>Color:</span>
                  <span
                    className="block rounded-full h-4 w-4 cursor-pointer"
                    style={{
                      backgroundColor: product.attributes.colors[0],
                    }}
                  ></span>
                </p>
              </div>
              <div>
                <p>Amount</p>
                <div>
                  <select className="select select-primary w-full">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
                <p>remove</p>
              </div>
              <div>$</div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Card;
