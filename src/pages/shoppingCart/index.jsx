import React, { useState, useEffect } from "react";

function Card() {
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState({
    shipping: 0,
    tax: 0,
    subtotal: 0,
    orderTotal: 0,
  });

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);

    if (existingCart.length > 0) {
      let amount = 0;
      let subtotal = 0;

      existingCart.forEach((el) => {
        amount += el.amount;
        subtotal += el.price * el.amount;
      });

      const shipping = 5 * amount;
      const tax = 20 * amount;
      const orderTotal = shipping + tax + subtotal;

      setPrices({
        shipping,
        tax,
        subtotal,
        orderTotal,
      });
    }
  }, []);

  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    let amount = 0;
    let subtotal = 0;

    updatedCart.forEach((el) => {
      amount += el.amount;
      subtotal += el.price * el.amount;
    });

    const shipping = 5 * amount;
    const tax = 20 * amount;
    const orderTotal = shipping + tax + subtotal;

    setPrices({
      shipping,
      tax,
      subtotal,
      orderTotal,
    });
  };
  return (
    <div>
      <h2 className="text-4xl mt-20 mb-12">Shopping Cart</h2>
      <hr className="mb-16" />
      <div className="flex gap-4 items-start">
        {cart.length > 0 ? (
          <div className="flex flex-col gap-4 w-[70%]">
            {cart.map((product) => (
              <div key={product.id} className="flex gap-16">
                <div>
                  <img
                    className="h-32 w-32 rounded-lg mr-16"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p>{product.title}</p>
                    <p className="my-2 text-slate-300">{product.company}</p>
                    <p className="flex gap-2 items-center">
                      <span>Color:</span>
                      <span
                        className="block rounded-full h-4 w-4 cursor-pointer"
                        style={{
                          backgroundColor: product.color,
                        }}
                      ></span>
                    </p>
                  </div>
                  <div>
                    <p>Amount</p>
                    <div>
                      <select className="select-primary w-full my-1">
                        <option value={product.amount}>{product.amount}</option>
                      </select>
                    </div>
                    <p
                      onClick={() => handleRemoveProduct(product.id)}
                      className="text-blue-400 font-medium cursor-pointer"
                    >
                      remove
                    </p>
                  </div>
                  <div className="font-medium text-lg">
                    $ {product.amount * product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-[70%]">Shopping cart is empty</div>
        )}
        <div class="card bg-base-200 w-[30%]">
          <div class="card-body">
            <p class="flex justify-between text-xs border-b border-base-300 pb-2">
              <span>Subtotal</span>
              <span class="font-medium">${prices.subtotal}</span>
            </p>
            <p class="flex justify-between text-xs border-b border-base-300 pb-2">
              <span>Shipping</span>
              <span class="font-medium">${prices.shipping}</span>
            </p>
            <p class="flex justify-between text-xs border-b border-base-300 pb-2">
              <span>Tax</span>
              <span class="font-medium">${prices.tax}</span>
            </p>
            <p class="flex justify-between text-sm mt-4 pb-2">
              <span>Order Total</span>
              <span class="font-medium">${prices.orderTotal}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
