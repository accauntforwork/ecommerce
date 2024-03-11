import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.data.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(1);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAmountChange = (event) => {
    setSelectedAmount(parseInt(event.target.value, 10));
  };

  const handleAddToBag = () => {
    if (selectedColor == null) {
      alert("Avval rang tanlang");
      return;
    }
    const cartItem = {
      id: product.id,
      title: product.attributes.title,
      color: selectedColor,
      amount: selectedAmount,
      company: product.attributes.company,
      price: product.attributes.price / 100,
      image: product.attributes.image,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, cartItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div>
      <p className="mt-16 mb-8 text-gray">Home {">"} Products</p>

      <div className="flex justify-between gap-12">
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
                key={index}
                className="block rounded-full h-4 w-4 cursor-pointer"
                style={{
                  backgroundColor: color,
                  border: selectedColor === color ? "solid 2px black" : "none",
                }}
                onClick={() => handleColorClick(color)}
              ></span>
            ))}
          </div>
          <h4 className="font-semibold mt-4 mb-2">Amount</h4>
          <div>
            <select
              className="select select-primary w-[70%]"
              value={selectedAmount}
              onChange={handleAmountChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <button
            className="btn btn-neutral uppercase mt-12"
            onClick={handleAddToBag}
          >
            Add to bag
          </button>
        </div>
      </div>
      <div className="block h-20"></div>
    </div>
  );
};

export default ProductDetail;
