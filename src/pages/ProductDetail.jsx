import React from "react";
import { useParams } from "react-router-dom";
import data from "../../featured.json";
// console.log("4 productdetails");
// console.log(data);

const ProductDetail = () => {
  const { id } = useParams();
  //   console.log(9 + "" + id);

  const product = data.data.find((p) => p.id == id);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2 className="text-4xl mt-20 mb-12">{product.attributes.title}</h2>
      <img
        src={product.attributes.image}
        alt={product.attributes.title}
        className="rounded-xl h-48 w-full overflow-x-hidden"
      />
      <p>Price: $ {product.attributes.price / 100}</p>
    </div>
  );
};

export default ProductDetail;
